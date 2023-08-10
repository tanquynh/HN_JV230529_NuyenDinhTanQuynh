const list = [
  {
    id: 1,
    title: "Cola",
    price: 6,
    image:
      "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
    amount: 0,
  },
  {
    id: 2,
    title: "Fanta",
    price: 5,
    image:
      "https://www.coca-cola.com/content/dam/onexp/vn/home-image/fanta/blueberry.desktop.png",
    amount: 0,
  },
  {
    id: 3,
    title: "Sprite",
    price: 5,
    image: "https://images.ofix.com/product-image/s99509_2.jpg",
    amount: 0,
  },
  {
    id: 4,
    title: "Ayran",
    price: 3,
    image:
      "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
    amount: 0,
  },
  {
    id: 5,
    title: "Salgam",
    price: 4,
    image: "http://esenlik.com.tr//images/prod/5704.jpg",
    amount: 0,
  },
  {
    id: 6,
    title: "Cay",
    price: 3,
    image:
      "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
    amount: 0,
  },
  {
    id: 7,
    title: "Kahve",
    price: 10,
    image:
      "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
    amount: 0,
  },
  {
    id: 8,
    title: "Soda",
    price: 4,
    image: "http://esenlik.com.tr//images/prod/2928.jpg",
    amount: 0,
  },
  {
    id: 9,
    title: "Bisiklet",
    price: 1000,
    image: "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg",
    amount: 0,
  },
  {
    id: 10,
    title: "Lüx Kol Saati",
    price: 25000,
    image:
      "data:image/jpeg;base64,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",
    amount: 0,
  },
  {
    id: 11,
    title: "Bugatti Chiron",
    price: 2500000,
    image: "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
    amount: 0,
  },
  {
    id: 12,
    title: "Iskender",
    price: 50,
    image:
      "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
    amount: 0,
  },
  {
    id: 13,
    title: "Lahmacun",
    price: 12,
    image:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
    amount: 0,
  },
  {
    id: 14,
    title: "Malikane",
    price: 2500000000,
    image:
      "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
    amount: 0,
  },
  {
    id: 15,
    title: "Helicopter",
    price: 28750000,
    image:
      "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
    amount: 0,
  },
  {
    id: 16,
    title: "Luxury Yatch",
    price: 17500000,
    image: "https://d.neoldu.com/news/57966.jpg",
    amount: 0,
  },
  {
    id: 17,
    title: "Limosine",
    price: 1000000,
    image:
      "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    amount: 0,
  },
  {
    id: 18,
    title: "Ada",
    price: 125000000,
    image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
    amount: 0,
  },
  {
    id: 22,
    title: "Stadium",
    price: 2500000,
    image:
      "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
    amount: 0,
  },
  {
    id: 23,
    title: "Bitcoin",
    price: 60000,
    image:
      "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
    amount: 0,
  },
  {
    id: 19,
    title: "Messi Tshirt",
    price: 250,
    image: "https://cdn-amz.woka.io/images/I/517kpCfAETL._SR476,476_.jpg",
    amount: 0,
  },
];

export default list;
