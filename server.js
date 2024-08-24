const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// 샘플 데이터 (DB 대신 사용할 수 있음)
// 1페이지 
const mainPageData = {
  AdBanner: "https://example.com/ad-banner.jpg",  // 광고 배너 이미지 URL
  recommendations: [
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/main1.png",
      productUrl: "https://www.coupang.com/vp/products/8054709864?vendorItemId=90815121876",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/main2.jpg",
      productUrl: "https://www.coupang.com/vp/products/7344992433",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/main3.jpg",
      productUrl: "https://www.coupang.com/vp/products/7830616996",
    },
  ],
  reviewers: [
    {
      profile: "https://example.com/profile1.jpg",
      reviewer: "Reviewer1",
      introduction: "Fashion enthusiast"
    },
    {
      profile: "https://example.com/profile2.jpg",
      reviewer: "Reviewer2",
      introduction: "Tech guru"
    },
    {
      profile: "https://example.com/profile3.jpg",
      reviewer: "Reviewer3",
      introduction: "Beauty expert"
    },
    {
      profile: "https://example.com/profile4.jpg",
      reviewer: "Reviewer4",
      introduction: "Food lover"
    },
    {
      profile: "https://example.com/profile5.jpg",
      reviewer: "Reviewer5",
      introduction: "Gadget reviewer"
    }
  ]
};

const beautyPageData = {
  AdBanner: "https://example.com/ad-banner.jpg",  // 광고 배너 이미지 URL
  recommendations: [
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/beauty1.jpg",
      productUrl: "https://www.coupang.com/vp/products/8122953264",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/beauty2.jpg",
      productUrl: "https://www.coupang.com/vp/products/5455902399?vendorItemId=90825903220",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/beauty3.jpg",
      productUrl: "https://www.coupang.com/vp/products/5099733866",
    },
  ],
  reviewers: [
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/beauty_p1.jpg",
      reviewer: "GlamByGrace",
      introduction: "Expert in transforming everyday looks into glamourous styles."
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/beauty_p2.jpg",
      reviewer: "LuxeLuna",
      introduction: "Passionate about luxury beauty and skincare."
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/beauty_p3.jpg",
      reviewer: "RosyRadiance",
      introduction: "Bringing you the secrets to a naturally glowing complexion"
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/beauty_p4.jpg",
      reviewer: "VelvetVibes",
      introduction: "Specialist in soft, elegant makeup looks."
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/beauty_p5.jpg",
      reviewer: "ChicSculpt",
      introduction: "Crafting flawless contours with a chic touch."
    }
  ]
};

const fashionPageData = {
  AdBanner: "https://example.com/ad-banner.jpg",  // 광고 배너 이미지 URL
  recommendations: [
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/fashion1.jpg",
      productUrl: "https://www.coupang.com/vp/products/7319912616",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/fashion2.png",
      productUrl: "https://www.coupang.com/vp/products/7951362526",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/fashion3.jpg",
      productUrl: "https://www.coupang.com/vp/products/7590749265",
    },
  ],
  reviewers: [
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/fashion_p1.jpg",
      reviewer: "StyleBySophia",
      introduction: "Curating timeless fashion with a modern twist"
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/fashion_p2.jpg",
      reviewer: "UrbanGent",
      introduction: "Mastering the art of contemporary men's fashion"
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/fashion_p3.jpg",
      reviewer: "TrendMaven",
      introduction: "Your guide to the latest and greatest in global fashion"
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/fashion_p4.jpg",
      reviewer: "ChicInCharlotte",
      introduction: "Effortlessly blending elegance with everyday wear"
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/fashion_p5.jpg",
      reviewer: "DapperDylan",
      introduction: "Elevating street styles with a fresh perspective"
    }
  ]
};

const stationaryPageData = {
  AdBanner: "https://example.com/ad-banner.jpg",  // 광고 배너 이미지 URL
  recommendations: [
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/stationary1.jpg",
      productUrl: "https://www.coupang.com/vp/products/6855901626",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/stationary2.jpg",
      productUrl: "https://www.coupang.com/vp/products/6553346783",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/stationary3.png",
      productUrl: "https://www.coupang.com/vp/products/7396102229?vendorItemId=87038585545",
    },
  ],
  reviewers: [
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/stationery_p1.jpg",
      reviewer: "PaperByPaige",
      introduction: "Discovering the finest in stationery for every creative mind"
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/stationery_p2.jpg",
      reviewer: "NoteWorthyNina",
      introduction: "Showcasing elegant and functional stationery essentials"
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/stationery_p3.jpg",
      reviewer: "InkAndImpressions",
      introduction: "Exploring the art of beautiful writing and stationery"
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/stationery_p4.jpg",
      reviewer: "StationerySteve",
      introduction: "Your go-to for funny stationery"
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/stationery_p5.jpg",
      reviewer: "PenmanshipPaul",
      introduction: "Reviewing premium stationery for the discerning writer"
    }
  ]
};

const electronicsPageData = {
  AdBanner: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/electronicsBanner.jpg",  // 광고 배너 이미지 URL
  recommendations: [
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/electronics1.jpg",
      productUrl: "https://www.coupang.com/vp/products/8134826720?vendorItemId=90139704536",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/electronics2.jpg",
      productUrl: "https://www.coupang.com/vp/products/7655755838",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/electronics3.jpg",
      productUrl: "https://www.coupang.com/vp/products/6764000977?vendorItemId=87400869253",
    },
  ],
  reviewers: [
    {
      profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/electronics1.jpg",
      reviewer: "HomeHaven",
      introduction: "Sharing ideas for creating a cozy and comfortable living space."
    },
    {
      profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/electronics2.jpg",
      reviewer: "LivingWellness",
      introduction: "Focused on enhancing well-being through mindful living and home practices."
    },
    {
      profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/electronics4.jpg",
      reviewer: "SpaceSanctuary",
      introduction: "Exploring ways to turn any space into a personal sanctuary."
    },
    {
      profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/electronics5.jpg",
      reviewer: "CozyNestLife",
      introduction: "Passionate about creating warm and inviting homes that nurture the soul."
    },
    {
      profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/electronics6.jpg",
      reviewer: "EcoLivingEssentials",
      introduction: "Advocating for a sustainable lifestyle through eco-friendly living choices."
    }
  ]
};

const livingsPageData = {
  AdBanner: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/livingsBanner.jpg",  // 광고 배너 이미지 URL
  recommendations: [
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/livings1.jpg",
      productUrl: "https://www.coupang.com/vp/products/7730205162?vendorItemId=87840276019",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/livings2.jpg",
      productUrl: "https://www.coupang.com/vp/products/7458327454?vendorItemId=86545351181",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/livings3.jpg",
      productUrl: "https://www.coupang.com/vp/products/1514118803",
    },
  ],
  reviewers: [
    {
      profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/livings1.jpg",
      reviewer: "GreenLivingGuru",
      introduction: "Focused on living in harmony with nature through sustainable practices."
    },
    {
      profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/livings2.jpg",
      reviewer: "EcoNestBuilder",
      introduction: "Shares tips on eco-friendly home decor and interior design."
    },
    {
      profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/livings3.jpg",
      reviewer: "ConsciousSpaces",
      introduction: "Promote a minimalist and eco-conscious lifestyle to enhance quality of life."
    },
    {
      profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/livings4.jpg",
      reviewer: "UrbanHomesteader",
      introduction: "Practice sustainable living and self-sufficiency in an urban environment."
    },
    {
      profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/livings5.jpg",
      reviewer: "MindfulDwelling",
      introduction: "Dedicated to improving life quality through small changes at home."
    }
  ]
};

const foodsPageData = {
  AdBanner: "https://example.com/ad-banner.jpg",  // 광고 배너 이미지 URL
  recommendations: [
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/foods1.jpg",
      productUrl: "https://www.coupang.com/vp/products/218520566",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/foods2.jpg",
      productUrl: "https://www.coupang.com/vp/products/7107434987",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/foods3.jpg",
      productUrl: "https://www.coupang.com/vp/products/1342896754",
    },
  ],
  reviewers: [
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/foods_p1.jpg",
      reviewer: "FlavorFanatic",
      introduction: "Tasting and reviewing diverse gourmet and everyday foods"
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/foods_p2.jpg",
      reviewer: "SnackGuru",
      introduction: "Critiquing the best in snacks and convenience foods"
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/foods_p3.jpg",
      reviewer: "SweetToothSavant",
      introduction: "Exploring sweet treats and desserts"
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/foods_p4.jpg",
      reviewer: "SavorySampler",
      introduction: "Analyzing savory snacks and meals"
    },
    {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/profiles/foods_p5.jpg",
      reviewer: "HealthyEatsExpert",
      introduction: "Reviewing nutritious and health-conscious foods"
    }
  ]
};

// 2페이지
const myPageData = {
  profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/mypagedata_profile.jpg",  // 내 프로필 사진
  reviewer: "bomin0216",  // 내 닉네임
  introduction: "전자제품에 관심이 많은 eggy developer.",  // 내 한줄 소개
  recentCart: [
    {
      image: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/recentCart1.jpeg",
      productUrl: "https://www.coupang.com/vp/products/6809737318?itemId=16105736571&vendorItemId=83373429976&q=%EB%AC%B4%EC%86%8C%EC%9D%8C%EB%A7%88%EC%9A%B0%EC%8A%A4&itemsCount=13&searchId=75a84dd3dd294154a42c13e278af7bf4&rank=0&isAddedCart=",
    },
    {
      image: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/recentCart2.jpeg",
      productUrl: "https://www.coupang.com/vp/products/8196364594?itemId=19889574352&vendorItemId=89550091005&q=%EB%AC%B4%EC%86%8C%EC%9D%8C%EB%A7%88%EC%9A%B0%EC%8A%A4&itemsCount=13&searchId=75a84dd3dd294154a42c13e278af7bf4&rank=9&isAddedCart=",
    },
    {
      image: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/recentCart3.jpg",
      productUrl: "https://www.coupang.com/vp/products/7883205856?itemId=21564200393&vendorItemId=88616341029&sourceType=SDP_MID_BANNER&clickEventId=e82f7890-6222-11ef-a137-efaef02e37a3&isAddedCart=",
    },
  ],
    // 내가 최근 담은 상품
    recentBuy: [
    {
      image: "https://image9.coupangcdn.com/image/0820_amir_esrgan_inf80k_batch_1_max3k/aec6/e8db0b36f13f44027b6f56a9700ef62d0c9879d8f9ed65902e7b29f23958.jpg",
      productUrl: "https://www.coupang.com/vp/products/7038370730?itemId=17397499719&vendorItemId=84566957579&q=%EB%AC%B4%EC%86%8C%EC%9D%8C%EB%A7%88%EC%9A%B0%EC%8A%A4&itemsCount=13&searchId=75a84dd3dd294154a42c13e278af7bf4&rank=2&isAddedCart=",
    },
    {
      image: "https://image6.coupangcdn.com/image/vendor_inventory/9d9b/1ef72d2d19f737919e134ae6f9aa9d02e380b3a819b7669c6a23bf4ea0bd.jpg",
      productUrl: "https://www.coupang.com/vp/products/7601444917?itemId=20109217264&vendorItemId=87246643807&sourceType=srp_product_ads&clickEventId=c03c80b0-6224-11ef-900f-3468d80c42c2&korePlacement=15&koreSubPlacement=12&q=%EC%B5%9C%EA%B3%A0%EA%B8%89%EB%AA%A8%EB%8B%88%ED%84%B0&itemsCount=49&searchId=d5559fd527cb442c8e3bab6ea9ef9833&rank=11&isAddedCart=",
    },
    {
      image: "https://image8.coupangcdn.com/image/0820_amir_esrgan_inf80k_batch_0_max3k/9070/5456ebd426f30bd3dce17cf52aff0c48751775e1c456704f8af2461f532a.png",
      productUrl: "https://www.coupang.com/vp/products/7342370420?vendorItemId=89214598977&sourceType=sdp_bottom_promotion&searchId=feed-47f2d3457706463c94b7050ad76d2cc2-gw_promotion&isAddedCart=",
    }],  // 내가 최근 구매한 상품
    follows: [
      {
        profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/mypagedata_profile.jpg",
        carts: [
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/beauty1.jpg",
            productUrl: "https://www.coupang.com/vp/products/8122953264",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/beauty2.jpg",
            productUrl: "https://www.coupang.com/vp/products/5455902399?vendorItemId=90825903220",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/beauty3.jpg",
            productUrl: "https://www.coupang.com/vp/products/5099733866",
          },
        ]
      },
      {
        profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/7421aede-f628-4900-a3f3-8ed354fb6c5f.jpg",
        carts: [
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/electronics1.jpg",
            productUrl: "https://www.coupang.com/vp/products/8134826720?vendorItemId=90139704536",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/electronics2.jpg",
            productUrl: "https://www.coupang.com/vp/products/7655755838",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/electronics3.jpg",
            productUrl: "https://www.coupang.com/vp/products/6764000977?vendorItemId=87400869253",
          },
        ]
      },
      {
        profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/79993.jpg",
        carts: [
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/livings1.jpg",
            productUrl: "https://www.coupang.com/vp/products/7730205162?vendorItemId=87840276019",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/livings2.jpg",
            productUrl: "https://www.coupang.com/vp/products/7458327454?vendorItemId=86545351181",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/livings3.jpg",
            productUrl: "https://www.coupang.com/vp/products/1514118803",
          },
        ]
      },
      {
        profile: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/599c744f-a3f6-4c10-9f29-9994dc45ca02.jpg",
        carts: [
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/stationary1.jpg",
            productUrl: "https://www.coupang.com/vp/products/6855901626",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/stationary2.jpg",
            productUrl: "https://www.coupang.com/vp/products/6553346783",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/stationary3.png",
            productUrl: "https://www.coupang.com/vp/products/7396102229?vendorItemId=87038585545",
          },
        ]
      }
    ],  // 내가 팔로우한 사람들의 카트
    posts: [
      "갤럭시 S24 울트라 리뷰: 최고의 안드로이드 플래그십?",
      "LG OLED TV 2024 모델 리뷰: 집에서 경험하는 최고의 영화 감상",
      "소노스 아크 리뷰: 거실을 콘서트홀로 만드는 사운드바"
    ]  // 내가 이전에 쓴 글 제목들
  };
  

// 3페이지 
const reviewers = {
    Reviewer1: {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/main/profile1.jpg",
      reviewer: "Makeup Eunbi",
      introduction: "Loves fashion and lifestyle.",
      banner: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/7044093.jpg",
      posts: ["올해의 베스트 파운데이션: 무결점 피부를 위한 추천템", "가성비 갑! 드럭스토어에서 찾은 숨은 메이크업 꿀템", "V라인 완성! 자연스럽게 얼굴을 작아보이게 하는 쉐딩 제품 추천"],
      carts: [
          {
            image: "https://image7.coupangcdn.com/image/0820_amir_esrgan_inf80k_batch_5_max3k/31b2/a22e7cf3b8b6014ce12f5d86926b24ead24b6bc63f69022989673fdbb0a6.png",
            productUrl: "https://www.coupang.com/vp/products/8063592847?itemId=22666751691&vendorItemId=89704424372&sourceType=CATEGORY&categoryId=498604&isAddedCart=",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-1.jpg",
            productUrl: "https://www.coupang.com/vp/products/6530288800?itemId=14501277258&vendorItemId=4007901946",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-2.jpg",
            productUrl: "https://www.coupang.com/vp/products/8112731313?itemId=22991538234&vendorItemId=81459666781",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-3.jpg",
            productUrl: "https://www.coupang.com/vp/products/336407680?itemId=1073054371&vendorItemId=5565028454",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-4.jpg",
            productUrl: "https://www.coupang.com/vp/products/1758098717?itemId=10631974055&vendorItemId=90028130203",
          },
      ]
    },
    Reviewer2: {
      profile: "https://raw.githubusercontent.com/Jyoonly/my-images/main/profile1.jpg",
      reviewer: "Makeup Eunbi",
      introduction: "Loves fashion and lifestyle.",
      banner: "https://raw.githubusercontent.com/bomin0216/angelhack_pics/main/7044093.jpg",
      posts: ["올해의 베스트 파운데이션: 무결점 피부를 위한 추천템", "가성비 갑! 드럭스토어에서 찾은 숨은 메이크업 꿀템", "V라인 완성! 자연스럽게 얼굴을 작아보이게 하는 쉐딩 제품 추천"],
      carts: [
          {
            image: "https://image7.coupangcdn.com/image/0820_amir_esrgan_inf80k_batch_5_max3k/31b2/a22e7cf3b8b6014ce12f5d86926b24ead24b6bc63f69022989673fdbb0a6.png",
            productUrl: "https://www.coupang.com/vp/products/8063592847?itemId=22666751691&vendorItemId=89704424372&sourceType=CATEGORY&categoryId=498604&isAddedCart=",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-1.jpg",
            productUrl: "https://www.coupang.com/vp/products/6530288800?itemId=14501277258&vendorItemId=4007901946",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-2.jpg",
            productUrl: "https://www.coupang.com/vp/products/8112731313?itemId=22991538234&vendorItemId=81459666781",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-3.jpg",
            productUrl: "https://www.coupang.com/vp/products/336407680?itemId=1073054371&vendorItemId=5565028454",
          },
          {
            image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-4.jpg",
            productUrl: "https://www.coupang.com/vp/products/1758098717?itemId=10631974055&vendorItemId=90028130203",
          },
      ]
    },
    // 추가 리뷰어들에 대한 데이터도 여기에 포함될 수 있음
  };


// 4페이지
const posts = {
  Reviewer1: {
    profile: "https://raw.githubusercontent.com/Jyoonly/my-images/main/profile1.jpg",
    reviewer: "Makeup Eunbi",
    introduction: "Loves fashion and lifestyle.",
    video: "https://www.youtube.com/watch?v=nLIYL661C9I", //유튜브 링크 그대로 삽입
    carts: [
      {
        image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-1.jpg",
        productUrl: "https://www.coupang.com/vp/products/6530288800?itemId=14501277258&vendorItemId=4007901946",
      },
      {
        image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-2.jpg",
        productUrl: "https://www.coupang.com/vp/products/8112731313?itemId=22991538234&vendorItemId=81459666781",
      },
      {
        image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-3.jpg",
        productUrl: "https://www.coupang.com/vp/products/336407680?itemId=1073054371&vendorItemId=5565028454",
      },
      {
        image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-4.jpg",
        productUrl: "https://www.coupang.com/vp/products/1758098717?itemId=10631974055&vendorItemId=90028130203",
      },
  ],
  },
  Reviewer2: {
    profile: "https://example.com/reviewer2-profile.jpg",
    reviewer: "Reviewer2",
    introduction: "Gadget enthusiast.",
    video: "https://www.youtube.com/watch?v=nLIYL661C9I",
    carts: [
      {
        image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-1.jpg",
        productUrl: "https://www.coupang.com/vp/products/6530288800?itemId=14501277258&vendorItemId=4007901946",
      },
      {
        image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-2.jpg",
        productUrl: "https://www.coupang.com/vp/products/8112731313?itemId=22991538234&vendorItemId=81459666781",
      },
      {
        image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-3.jpg",            productUrl: "https://www.coupang.com/vp/products/336407680?itemId=1073054371&vendorItemId=5565028454",
      },
      {
        image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/1-4.jpg",
        productUrl: "https://www.coupang.com/vp/products/1758098717?itemId=10631974055&vendorItemId=90028130203",
      },
  ],
  }
  // 추가 리뷰어들에 대한 데이터도 여기에 포함될 수 있음
};
  

// API 엔드포인트

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  


// 1. 첫 번째 페이지 데이터 가져오기
app.get('/whatsinmycart/landing', (req, res) => {
  res.json(mainPageData);
});

app.get('/whatsinmycart/beauty', (req, res) => {
  res.json(beautyPageData);
});

app.get('/whatsinmycart/fashion', (req, res) => {
  res.json(fashionPageData);
});

app.get('/whatsinmycart/stationary', (req, res) => {
  res.json(stationaryPageData);
});

app.get('/whatsinmycart/electronics', (req, res) => {
  res.json(electronicsPageData);
});

app.get('/whatsinmycart/livings', (req, res) => {
  res.json(livingsPageData);
});

app.get('/whatsinmycart/foods', (req, res) => {
  res.json(foodsPageData);
});

// 2. 마이페이지 데이터 가져오기
app.get('/whatsinmycart/mycart', (req, res) => {
    // 실제 구현에서는 현재 로그인된 사용자 정보에 기반하여 데이터를 반환해야 함
    // 현재는 샘플 데이터만 반환
    res.json(myPageData);
  });
  

// 3. 특정 리뷰어의 페이지 데이터(남의 페이지) 가져오기 (세 번째 페이지)
app.get('/whatsinmycart/cart/:reviewerName', (req, res) => {
    const reviewerName = req.params.reviewerName;
    
    const reviewerData = reviewers[reviewerName];
  
    if (reviewerData) {
      res.json(reviewerData);
    } else {
      res.status(404).json({ message: 'Reviewer not found' });
    }
  });

  
// 4. 특정 리뷰어의 상세 페이지 데이터(남의 글) 가져오기 (네 번째 페이지)
app.get('/whatsinmycart/post/:reviewerName', (req, res) => { 
    const reviewerName = req.params.reviewerName;
    
    const detailData = posts[reviewerName];
  
    if (detailData) {
      res.json(detailData);
    } else {
      res.status(404).json({ message: 'Reviewer details not found' });
    }
  });