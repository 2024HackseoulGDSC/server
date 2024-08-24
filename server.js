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
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/main1.jpg",
      productUrl: "https://www.coupang.com/vp/products/8054709864",
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
      productUrl: "https://www.coupang.com/vp/products/5455902399",
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
      productUrl: "https://www.coupang.com/vp/products/7396102229",
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
      productUrl: "https://www.coupang.com/vp/products/8134826720",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/electronics2.jpg",
      productUrl: "https://www.coupang.com/vp/products/7655755838",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/electronics3.jpg",
      productUrl: "https://www.coupang.com/vp/products/6764000977",
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
      productUrl: "https://www.coupang.com/vp/products/7730205162",
    },
    {
      image: "https://raw.githubusercontent.com/Jyoonly/my-images/main/livings2.jpg",
      productUrl: "https://www.coupang.com/vp/products/7458327454",
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
    profile: "https://example.com/my-profile.jpg",  // 내 프로필 사진
    reviewer: "MyUsername",  // 내 닉네임
    introduction: "Tech enthusiast and gadget reviewer.",  // 내 한줄 소개
    recentCart: [
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
    ],  // 내가 최근 담은 상품
    recentBuy: [
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
    ],  // 내가 최근 구매한 상품
    follows: [
      {
        profile: "https://example.com/follow-profile1.jpg",
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
        ]
      },
      {
        profile: "https://example.com/follow-profile2.jpg",
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
        ]
      },
      {
        profile: "https://example.com/follow-profile3.jpg",
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
        ]
      }
    ],  // 내가 팔로우한 사람들의 카트
    posts: [
      "Old Post Title 1",
      "Old Post Title 2",
      "Old Post Title 3"
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