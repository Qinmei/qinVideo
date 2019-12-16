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
    const input = secret + url + expired;
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
