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
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5"
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
      "Cart Item 1",
      "Cart Item 2",
      "Cart Item 3"
    ],  // 내가 최근 담은 상품
    recentBuy: [
      "Purchased Item 1",
      "Purchased Item 2"
    ],  // 내가 최근 구매한 상품
    follows: [
      {
        profile: "https://example.com/follow-profile1.jpg",
        carts: ["Followed Cart Item 1", "Followed Cart Item 2"]
      },
      {
        profile: "https://example.com/follow-profile2.jpg",
        carts: ["Followed Cart Item 3", "Followed Cart Item 4"]
      },
      {
        profile: "https://example.com/follow-profile3.jpg",
        carts: ["Followed Cart Item 5", "Followed Cart Item 6"]
      }
    ],  // 내가 팔로우한 사람들의 카트
    posts: [
      "Old Post Title 1",
      "Old Post Title 2",
      "Old Post Title 3"
    ]  // 내가 이전에 쓴 글 제목들
  };
  
//3. 샘플 데이터 (세 번째, 네 번째 페이지용)
const reviewers = {
    Reviewer1: {
      profile: "https://example.com/reviewer1-profile.jpg",
      reviewer: "Reviewer1",
      introduction: "Loves fashion and lifestyle.",
      banner: "https://example.com/reviewer1-banner.jpg",
      posts: ["Post Title 1", "Post Title 2", "Post Title 3"],
      carts: ["https://example.com/cart-item1.jpg", "https://example.com/cart-item2.jpg"]
    },
    Reviewer2: {
      profile: "https://example.com/reviewer2-profile.jpg",
      reviewer: "Reviewer2",
      introduction: "Gadget enthusiast.",
      banner: "https://example.com/reviewer2-banner.jpg",
      posts: ["Gadget Review 1", "Gadget Review 2"],
      carts: ["https://example.com/cart-item3.jpg", "https://example.com/cart-item4.jpg"]
    }
    // 추가 리뷰어들에 대한 데이터도 여기에 포함될 수 있음
  };

  

// API 엔드포인트

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  


// 1. 첫 번째 페이지 데이터 가져오기
app.get('/whatsinmycart', (req, res) => {
  res.json(mainPageData);
});

// 2. 마이페이지 데이터 가져오기
app.get('/whatsinmycart/mycart', (req, res) => {
    // 실제 구현에서는 현재 로그인된 사용자 정보에 기반하여 데이터를 반환해야 함
    // 현재는 샘플 데이터만 반환
    res.json(myPageData);
  });
  

// 3. 특정 리뷰어의 페이지 데이터 가져오기 (세 번째 페이지)
app.get('/whatsinmycart/cart/:reviewerName', (req, res) => {
    const reviewerName = req.params.reviewerName;
    
    const reviewerData = reviewers[reviewerName];
  
    if (reviewerData) {
      res.json(reviewerData);
    } else {
      res.status(404).json({ message: 'Reviewer not found' });
    }
  });

  
// 4. 특정 리뷰어의 상세 페이지 데이터 가져오기 (네 번째 페이지)
app.get('/api/reviewer/:reviewerName/details', (req, res) => { //링크 고쳐야됨
    const reviewerName = req.params.reviewerName;
    
    const detailData = reviewerDetails[reviewerName];
  
    if (detailData) {
      res.json(detailData);
    } else {
      res.status(404).json({ message: 'Reviewer details not found' });
    }
  });