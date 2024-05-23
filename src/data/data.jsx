const restaurants = [
  {
    id: 1,
    name: 'La Piazza',
    city: 'Tel Aviv',
    price: 150,
    cuisine: 'italian',
    images: [ 
      'https://media-cdn.tripadvisor.com/media/photo-s/1a/14/59/eb/la-piazza-vous-presente.jpg',
      'https://ristorantelapiazza.it/wp-content/uploads/2020/02/photo-main1.jpg',
      'https://nolinskiparis.com/wp-content/uploads/2022/06/restaurant-nolinski-paris-5-etoiles-luxe-12-guillaume-de-laubier.jpg',
      'https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg'
    ],
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/26/cd/57/9d/ristorante-la-piazza.jpg',
    description: 'A charming Italian restaurant offering traditional dishes and a cozy atmosphere.'
  },
  {
    id: 2,
    name: 'Sakura',
    city: 'Jerusalem',
    price: 200,
    cuisine: 'japanese',
    images: [ 
      'https://sakuracm.be/wp-content/uploads/2020/10/sakura-photo8.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/27/51/98/97/sakura-japanese-restaurant.jpg',
      'https://d1ralsognjng37.cloudfront.net/7be890f8-3e0c-4198-af7a-37875d28c871',
      'https://duyt4h9nfnj50.cloudfront.net/resized/1528433814196-w750-30.jpg'
    ],
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/14/fd/6f/5d/sakura-sushi-japanese.jpg',
    description: 'Authentic Japanese cuisine with fresh sushi and a serene dining experience.'
  },
  {
    id: 3,
    name: 'Burger King',
    city: 'Haifa',
    price: 80,
    cuisine: 'american',
    images: [
      'https://i.insider.com/5bd2234bdde867488579161f?width=700',
      'https://cdn.sanity.io/images/czqk28jt/prod_bk_ch/d8e2c951af454c8fa00723ccb504719cc709dc96-1000x422.jpg',
      'https://www.allrecipes.com/thmb/-zZLDYRokK4UwUUZiAs1AqEtA30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-burger-king-cheeseburger-2x1-13cf5ffb40e54fcda012877db971e4c6.jpg',
      'https://tb-static.uber.com/prod/image-proc/processed_images/b48d28bf3f064c985eb58802a2d9c898/c9252e6c6cd289c588c3381bc77b1dfc.jpeg',
    ],
    image: 'https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/uploads/2010/08/burgerkingext0810_0.jpg?itok=H6adUyOQ',
    description: 'Fast food chain serving grilled burgers, fries, and shakes in a casual setting.'
  },
  {
    id: 4,
    name: 'Taco Loco',
    city: 'Eilat',
    price: 120,
    cuisine: 'mexican',
    images: [
      'https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/qzocifax/4338c549-565f-4642-8932-441b648ab7be.JPG',
      'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/b6bb1c08-b361-495f-8463-3ec32fe94bff.png',
      'https://images.firsttable.net/1170x655/public/restaurant/b57d4273ff/68816559_2461139860773103_5288197355286298624_o.jpg',
      'https://www.japantimes.co.jp/wp-content/uploads/2015/04/p10-st-michel-taco-a-20150425.jpg',
    ],
    image: 'https://popmenucloud.com/ynwgzjcr/ffde2579-d392-4501-be18-870626d5b3a5.jpg',
    description: 'Vibrant Mexican eatery known for its delicious tacos and lively atmosphere.'
  },
  {
    id: 5,
    name: 'Curry House',
    city: 'Rishon LeZion',
    price: 170,
    cuisine: 'indian',
    images: [
      'https://mamaloli.com/wp-content/uploads/2012/03/curryhouse1.jpg',
      'https://cdn.vox-cdn.com/thumbor/xZ2WKl3hcAjY3I5zEuyCDVgqiIE=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9858195/o.jpg',
      'https://i.redd.it/y90oc9qaz4n61.jpg',
      'https://burpple.imgix.net/foods/2e723c1004608d27f8481547844_original.?w=645&dpr=1&fit=crop&q=80&auto=format',
    ],
    image: 'https://curryculture.co.uk/wp-content/uploads/curry-house-.jpg',
    description: 'Exquisite Indian cuisine with a variety of flavorful curries and traditional dishes.'
  },
  {
    id: 6,
    name: 'Le Vrai Paris',
    city: 'Tel Aviv',
    price: 180,
    cuisine: 'french',
    image: 'https://pr0.nicelocal.fr/NXbE2jfdKhmjwkpFxmKCew/587x440,q85/4px-BW84_n3lJhgQGe6caI1vAfZfD8yOKqS4dO4Py5dVeCDAtW6xSdK0XargmX21DWC_jgy1lpy5B_8-8eJBbW3t-iR7B3LtRzBiTAA_9lQ_D2a_vZtPFSmnWB6tHHrge1CuYSIfSyc',
    description: 'Elegant French dining experience with classic dishes and a sophisticated ambiance.'
  },
  {
    id: 7,
    name: 'Sushiya',
    city: 'Netanya',
    price: 190,
    cuisine: 'japanese',
    image: 'https://www.sushiyarestaurant.it/wp-content/uploads/2022/03/ER7_6202-2048x1365.jpg',
    description: 'Modern Japanese restaurant offering a wide selection of sushi and Japanese delights.'
  },
  {
    id: 8,
    name: 'BBQ Joint',
    city: 'Beer Sheva',
    price: 160,
    cuisine: 'american',
    image: 'https://whidbeycamanoislands.com/wp-content/uploads/2020/11/48947_The-BBQ-Joint-5733.jpg',
    description: 'Rustic American BBQ joint known for its smoked meats and hearty side dishes.'
  },
  {
    id: 9,
    name: 'El Mariachi',
    city: 'Haifa',
    price: 140,
    cuisine: 'mexican',
    image: 'https://restauranteelmariachi.com/files/2021/02/1612555966665_90790688_2910023035726274_4493789260641468416_n.jpg',
    description: 'Authentic Mexican restaurant with vibrant decor and delicious traditional dishes.'
  },
  {
    id: 10,
    name: 'Taj Mahal',
    city: 'Jerusalem',
    price: 200,
    cuisine: 'indian',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/13/9f/e4/1f/indian-restaurant.jpg',
    description: 'Luxurious Indian restaurant offering a rich menu of classic Indian delicacies.'
  },
  {
    id: 11,
    name: 'Ristorante Roma',
    city: 'Tel Aviv',
    price: 170,
    cuisine: 'italian',
    image: 'https://www.foodandwine.com/thmb/QANWIyOwJWIS5UXNk_foxib_VDo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-Rome-Trattorias-Gallery-Alla-Rampa-FT-BLOG1022-f266cf1dc7f34ba3afd14b6879a8b2e2.png',
    description: 'Classic Italian trattoria serving homemade pasta and traditional Italian dishes.'
  },
  {
    id: 12,
    name: 'Sakura Sushi',
    city: 'Herzliya',
    price: 210,
    cuisine: 'japanese',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/40/40/b4/inside-sakura-sushi-bar.jpg',
    description: 'Upscale sushi bar with a wide selection of fresh sushi and Japanese specialties.'
  },
  {
    id: 13,
    name: 'Burgers Bar',
    city: 'Tel Aviv',
    price: 100,
    cuisine: 'american',
    image: 'https://www.caesars.com/content/dam/empire/utu/restaurants/8oz-burger-bar/1920x1080/utu-8oz-burger-1920x1080.jpg.transform/featured-img/image.jpg',
    description: 'Popular burger joint known for its gourmet burgers and casual dining environment.'
  },
  {
    id: 14,
    name: 'Cantina Mexicana',
    city: 'Jerusalem',
    price: 150,
    cuisine: 'mexican',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/17/8b/13/0e/nice-and-colourful-place.jpg',
    description: 'Festive Mexican restaurant with colorful decor and a menu full of Mexican favorites.'
  },
  {
    id: 15,
    name: 'Bombay Magic',
    city: 'Tel Aviv',
    price: 190,
    cuisine: 'indian',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/c4/a2/4c/mumbai-magic-dining.jpg',
    description: 'Exquisite Indian restaurant offering a magical dining experience with flavorful dishes.'
  },
  {
    id: 16,
    name: 'The Greek Taverna',
    city: 'Tel Aviv',
    price: 160,
    cuisine: 'greek',
    image: 'https://www.telegraph.co.uk/content/dam/Travel/2019/January/greek-menu.jpg',
    description: 'Authentic Greek taverna serving traditional Greek dishes in a lively atmosphere.'
  },
];
export default restaurants;
