export const hexToRgb = (hex = "#697689", opacity) => {
  const rgb = [];

  hex = hex.substr(1);

  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, "$1$1");
  }

  hex.replace(/../g, function(color) {
    rgb.push(parseInt(color, 0x10));
  });

  return `rgba(${rgb.join(",")},${opacity})`;
};

export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

const indexLabel = {
  newIndexPlayAnimate: "播放最高",
  newIndexRateAnimate: "评分最高",
  newIndexNewAnimate: "新番连载",
  newIndexRandomAnimate: "随机推荐",
  newIndexPlayComic: "播放最高",
  newIndexRateComic: "评分最高",
  newIndexNewComic: "新漫连载",
  newIndexRandomComic: "随机推荐"
};

export const indexInit = arr => {
  return arr.map((item, key) => {
    if (/new/.test(item)) {
      const type = /Animate/.test(item) ? "animate" : "comic";
      let icon;
      if (/newIndexNew/.test(item)) {
        icon = "icon-xinpin";
      } else if (/newIndexRandom/.test(item)) {
        icon = "icon-three";
      } else if (/newIndexPlay/.test(item)) {
        icon = "icon-ic_movie_filter";
      } else if (/newIndexRate/.test(item)) {
        icon = "icon-huiyuan";
      }
      return {
        _id: item,
        name: indexLabel[item],
        status: "custom",
        type,
        icon
      };
    } else {
      item = JSON.parse(item);
      item.kind = item.type;
      switch (item.type) {
        case "akind":
          item.type = "animate";
          break;
        case "ckind":
          item.type = "comic";
          break;
        case "pkind":
          item.type = "post";
          break;
        default:
          break;
      }
      const iconArr = [
        "icon-zhandouzuozhan",
        "icon-kafeibei",
        "icon-zhinengyouhua",
        "icon-yule",
        "icon-youxian",
        "icon-mudedi",
        "icon-kongdiao"
      ];
      const icon = iconArr[key % 6];
      return {
        ...item,
        status: "normal",
        icon
      };
    }
  });
};

export const indexTrans = element => {
  const id = element._id;
  let query = {
    size: 20,
    page: 1,
    sortBy: "updatedAt",
    sortOrder: -1
  };
  if (element.status === "normal") {
    const type = element.type === "animate" ? "kind" : element.type;
    query[type] = id;
  } else if (element.status === "custom") {
    let newQuery = {};
    if (/newIndexNew/.test(id)) {
      newQuery = {
        update: true,
        size: 100
      };
    } else if (/newIndexRandom/.test(id)) {
      newQuery = {
        sortBy: "introduce"
      };
    } else if (/newIndexPlay/.test(id)) {
      newQuery = {
        sortBy: "countPlay"
      };
    } else if (/newIndexRate/.test(id)) {
      newQuery = {
        sortBy: "countStar"
      };
    }
    query = {
      ...query,
      ...newQuery
    };
  }

  return query;
};

export const weekGroup = list => {
  const week = {
    day0: [],
    day1: [],
    day2: [],
    day3: [],
    day4: [],
    day5: [],
    day6: []
  };
  list.map(item => {
    const day = item.updateDay;
    week[`day${day}`].push(item);
  });
  return week;
};
