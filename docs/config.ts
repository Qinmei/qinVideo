const assets = 'https://assets.qinmei.org';
const images = `${assets}/images`;
const videos = `${assets}/videos`;

const numArr = [...new Array(100).keys()].map(item => item.toString().padStart(3, '0'));

export default {
  favicon: `${images}/common/favicon.ico`,
  logo: `${images}/common/logo.svg`,
  github: 'https://github.com/Qinmei/qinVideo',
  demo: 'https://qinmei.video',
  bg: `${images}/common/bg2.jpg`,
  videobg: `${images}/common/video.jpg`,
  frontPic: numArr.slice(1, 13).map(item => `${images}/qinvideo/demo-${item}.jpg`),
  backPic: numArr.slice(21, 40).map(item => `${images}/qinvideo/demo-${item}.png`),
  video: {
    install: `${videos}/install.mp4`,
  },
};
