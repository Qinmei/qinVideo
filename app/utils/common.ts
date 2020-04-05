import * as crypto from 'crypto';
import * as fs from 'fs';

export const MD5 = (text: string) =>
    crypto
        .createHash('md5')
        .update(text)
        .digest('hex');

export const sleep = (time = 5000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

export const readJSON = (path) => {
    const data = fs.readFileSync(path);
    const result = JSON.parse(data.toString());
    return result;
};

export const generateSecurePathHash = (url, expires, secret) => {
    if (!expires || !secret) {
        return url;
    }

    let playLink = '/';
    if (/http/.test(url)) {
        playLink =
            playLink +
            url
                .split('/')
                .slice(3)
                .join('/');
    } else {
        playLink =
            playLink +
            url
                .split('/')
                .slice(1)
                .join('/');
    }

    const expired = Math.ceil(Date.now() / 1000) + expires;
    const input = secret + playLink + expired;

    const binaryHash = crypto
        .createHash('md5')
        .update(input)
        .digest();
    const base64Value = new Buffer(binaryHash).toString('base64');
    const token = base64Value
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
    return `${url}?st=${token}&e=${expired}`;
};

export const htmlEncode = (str: string) => {
    return str
        ? str
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#x27;')
              .replace(/\//g, '&#x2f;')
        : '';
};

export const indexTrans = (element: any) => {
    const id = element._id;
    let query = {
        size: 20,
        page: 1,
        sortBy: 'updatedAt',
        sortOrder: -1,
        kind: undefined,
        status: 'publish',
    };
    if (element.status === 'normal') {
        query.kind = id;
    } else if (element.status === 'custom') {
        let newQuery = {};
        if (/newIndexNew/.test(id)) {
            newQuery = {
                update: 'true',
                size: 100,
            };
        } else if (/newIndexRandom/.test(id)) {
            newQuery = {
                sortBy: 'introduce',
            };
        } else if (/newIndexPlay/.test(id)) {
            newQuery = {
                sortBy: 'countPlay',
            };
        } else if (/newIndexRate/.test(id)) {
            newQuery = {
                sortBy: 'countStar',
            };
        }
        query = {
            ...query,
            ...newQuery,
        };
    }

    return { query, origin: element.origin, type: element.type };
};

export const indexInit = (arr: string[]) => {
    const newArr = arr.map((item, key) => {
        if (/new/.test(item)) {
            const type = /Animate/.test(item) ? 'animate' : 'comic';
            return {
                _id: item,
                status: 'custom',
                type,
                origin: item,
            };
        } else {
            const newItem = JSON.parse(item);
            newItem.kind = newItem.type;
            switch (newItem.type) {
                case 'akind':
                    newItem.type = 'animate';
                    break;
                case 'ckind':
                    newItem.type = 'comic';
                    break;
                case 'pkind':
                    newItem.type = 'post';
                    break;
                default:
                    break;
            }
            return {
                ...newItem,
                status: 'normal',
                origin: item,
            };
        }
    });

    return newArr;
};
