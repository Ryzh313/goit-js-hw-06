const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// variant 1 = .map


const imgList = document.querySelector('.gallery');
console.log(imgList);

const createImageGallery = ({ url, alt }) => {
  return `<li><img src="${url}" alt="${alt}" width = '1260' height = '750'></li>`;
};
console.log(createImageGallery);

const createImages = images.map(createImageGallery).join('');
console.log(createImages);

imgList.insertAdjacentHTML("beforeend", createImages);

imgList.style.display = 'flex';
imgList.style.justifyContent = 'center';
imgList.style.flexWrap = 'wrap';
imgList.style.gap = '20px';
imgList.style.listStyle = 'none';


// variant 2 = .reduce


const imgList2 = document.querySelector('.gallery');
console.log(imgList);

const createImageGallery2 = ({ url, alt }) => {
  return `<li><img src="${url}" alt="${alt}" width = '1260' height = '750'></li>`;
};
console.log(createImageGallery2);

const createImages2 = images.reduce(
  (accaccumulator, image) => accaccumulator + createImageGallery2(image),
  ""
);

imgList2.insertAdjacentHTML("beforeend", createImages2);

imgList.style.display = 'flex';
imgList.style.justifyContent = 'center';
imgList.style.flexWrap = 'wrap';
imgList.style.gap = '20px';
imgList.style.listStyle = 'none';


