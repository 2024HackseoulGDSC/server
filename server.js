const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// 샘플 데이터 (DB 대신 사용할 수 있음)
// 1. 
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

const electronicsPageData = {
  AdBanner: "https://example.com/ad-banner.jpg",  // 광고 배너 이미지 URL
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

const livingsPageData = {
  AdBanner: "https://example.com/ad-banner.jpg",  // 광고 배너 이미지 URL
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

// 2. 
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
  
//3. 샘플 데이터 (세 번째 페이지용)
const reviewers = {
    Reviewer1: {
      profile: "https://example.com/reviewer1-profile.jpg",
      reviewer: "Reviewer1",
      introduction: "Loves fashion and lifestyle.",
      banner: "https://example.com/reviewer1-banner.jpg",
      posts: ["Post Title 1", "Post Title 2", "Post Title 3"],
      carts: [
          {
            image: "",
            productUrl: "",
          },
          {
            image: "",
            productUrl: "",
          },
          {
            image: "",
            productUrl: "",
          },
          {
            image: "",
            productUrl: "",
          },
          {
            image: "",
            productUrl: "",
          },
      ]
    },
    Reviewer2: {
      profile: "https://example.com/reviewer2-profile.jpg",
      reviewer: "Reviewer2",
      introduction: "Gadget enthusiast.",
      banner: "https://example.com/reviewer2-banner.jpg",
      posts: ["Gadget Review 1", "Gadget Review 2"],
      carts: [
        {
          image: "",
          productUrl: "",
        },
        {
          image: "",
          productUrl: "",
        },
        {
          image: "",
          productUrl: "",
        },
        {
          image: "",
          productUrl: "",
        },
        {
          image: "",
          productUrl: "",
        },
    ]
    }
    // 추가 리뷰어들에 대한 데이터도 여기에 포함될 수 있음
  };

//4. 샘플 데이터 (네 번째 페이지용)
const posts = {
  Reviewer1: {
    profile: "https://example.com/reviewer1-profile.jpg",
    reviewer: "Reviewer1",
    introduction: "Loves fashion and lifestyle.",
    video: "url",
    carts: [
      {
        image: "",
        productUrl: "",
      },
      {
        image: "",
        productUrl: "",
      },
      {
        image: "",
        productUrl: "",
      },
      {
        image: "",
        productUrl: "",
      },
  ],
  },
  Reviewer2: {
    profile: "https://example.com/reviewer2-profile.jpg",
    reviewer: "Reviewer2",
    introduction: "Gadget enthusiast.",
    video: "url",
    carts: [
      {
        image: "",
        productUrl: "",
      },
      {
        image: "",
        productUrl: "",
      },
      {
        image: "",
        productUrl: "",
      },
      {
        image: "",
        productUrl: "",
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