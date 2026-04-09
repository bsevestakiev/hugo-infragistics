---
isIndex: true
draft: false
title: Home
blocks:
  # 1. Cycling text — navy CTA hero banner
  - type: title
    background: true
    heading:
      title: "アプリを通じて、世界に%sを。"
      text: "最適なツールがあれば、ユーザーに素晴らしい体験を提供できます。"
    cycling_words:
      - "シンプルさ"
      - "美しさ"
      - "革新"
    ctas:
      - text: "無料トライアルを始める"
        url: "/trial/"
      - text: "価格を確認する"
        url: "/pricing/"

  # 2. Heading with subheading
  - type: title
    heading:
      surtitle: "30年以上にわたる、シンプルで美しい体験の提供"
      title: "最適なツールこそが、素晴らしい体験を創造します。"
      text: "私たちが大切にしている職人のこだわりは、デジタルプロダクトチームの生産性を向上させ、組織全体でデータ駆動型の高性能なチームを実現したいという願いから生まれています。 지난 30年間にわたり培ってきた専門知識を活かし、あらゆる細部にまでこだわりを持って構築しています。"

  # 3. Products — three cards in a row
  - type: informations
    column: 3
    items:
      - title: "Ultimate UI & Development Toolkit"
        text: "Infragistics Ultimate を導入すれば、アプリ開発期間を半分に短縮できます。ウェブ、モバイル、デスクトップなど、あらゆるプラットフォームに対応した数百種類の UI コントロールとコンポーネントを提供します。"
        cta:
          text: "詳細を見る"
          url: "/products/ultimate/"
        image:
          src: "images/home/ui-dashboard.webp"
          alt: "Ultimate UI ツールキットのダッシュボード"
      - title: "Embedded Analytics"
        text: "Reveal を使用して、美しくセルフサービス形式のダッシュボードをアプリケーションに直接統合できます。ユーザーはプロダクトを離れることなく、データを探索して意思決定を行うことが可能です。"
        cta:
          text: "詳細を見る"
          url: "/products/reveal/"
        image:
          src: "images/home/analytics-dashboard.webp"
          alt: "組み込み分析ダッシュボード"
      - title: "Work Management for Modern Teams"
        text: "Slingshot は、プロジェクト管理、データ分析、チームチャットを統合したオールインワンのデジタルワークプレイスであり、組織全体のスピードアップを実現します。"
        cta:
          text: "詳細を見る"
          url: "/products/slingshot/"
        image:
          src: "images/home/slingshot.webp"
          alt: "Slingshot ワークマネジメント"

  # 4. Logo grid
  - type: logos
    column: 6
    heading:
      title: "真に価値ある成功事例"
      text: "200万人以上の開発者が、世界クラスのアプリケーションを構築するために Infragistics の UX および UI ツールキットを利用しています。"
    items:
      - src: "images/home/logos1.jpg"
        title: "Logo 1"
      - src: "images/home/logos2.jpg"
        title: "Logo 2"
      - src: "images/home/logos3.jpg"
        title: "Logo 3"
      - src: "images/home/logos4.jpg"
        title: "Logo 4"
      - src: "images/home/logos5.jpg"
        title: "Logo 5"
      - src: "images/home/logos6.jpg"
        title: "Logo 6"
      - src: "images/home/logos7.jpg"
        title: "Logo 7"
      - src: "images/home/logos8.jpg"
        title: "Logo 8"
      - src: "images/home/logos9.jpg"
        title: "Logo 9"
      - src: "images/home/logos10.jpg"
        title: "Logo 10"
      - src: "images/home/logos11.jpg"
        title: "Logo 11"
      - src: "images/home/logos12.jpg"
        title: "Logo 12"

  # 4b. Customer stories carousel
  - type: testimonials
    layout: carousel
    carousel:
      params:
        type: loop
        autoplay: true
        interval: 5000
        pauseOnHover: true
        arrows: false
    items:
      - quote: "Slingshot により、部門を越えたチームのコラボレーション方法が変わり、すべてのプロジェクトをリアルタイムで完全に可視化できるようになりました。"
        author:
          title: "Cibao Meat Products"
      - quote: "Infragistics の分析コンポーネントのおかげで、ゼロから構築するよりも 3 倍早く薬局向けのインサイト機能をリリースできました。"
        author:
          title: "Scriptly"
      - quote: "Ignite UI のおかげで、レガシーな産業監視システムを記録的な速さで Angular へ近代化することができました。"
        author:
          title: "Bentley Nevada"
      - quote: "日常業務に影響を与えることなく、重要な取引プラットフォームをモダンなスタックへ移行させる上で、Infragistics のサポートが不可欠でした。"
        author:
          title: "UK Investment Bank"

  # 5. Latest news
  - type: latest
    section: blog
    count: 4
    heading:
      title: "最新ニュースと新機能を確認する"
    footing:
      ctas:
        - text: "すべてのニュースと記事を見る"
          url: "/blog/"

  # 6. Trusted partners — logo expand testimonials
  - type: logo-testimonials
    heading:
      title: "信頼されるパートナーと評価"
    items:
      - logo:
          src: "images/home/logo-microsoft.svg"
          title: "Microsoft Gold Partner"
        description: "Microsoft ゴールドパートナーとして、Infragistics は Microsoft 開発エコシステムの積極的なリーダーであり続け、あらゆるプラットフォームやデバイスでの .NET アプリケーション開発を効率化するコントロール、コンポーネント、ツールを提供しています。"
        quote: "Infragistics は 30 年近くにわたり Microsoft のパートナーを務めてきました。この密接な関係を通じて、Microsoft が自社製品に採用するテクノロジーを構築しただけでなく、Microsoft プラットフォームを拡張し、共同顧客が次世代のエンタープライズアプリケーションを構築するために使用する .NET ベースのツールやフレームワークを提供してきました。"
        author:
          name: "Jason Beres"
          role: "Chief Operating Officer, Infragistics"
      - logo:
          src: "images/home/logo-angular.svg"
          title: "Angular Framework"
        description: "Infragistics は Angular エコシステムへの積極的な貢献者であり、Google の Angular チームと直接連携してオープンソースの Angular コンポーネントに寄与しています。同時に、Material ベースの Angular ネイティブ UI コンポーネントとして最も完全な商用ライブラリである Ignite UI for Angular を提供しています。"
        quote: "最終的に、自分の仕事にとても満足しました。プロジェクト担当者が新しいアイデアにオープンで非常にフレンドリーであることに気づき、多くのことを学びました。また、数万人のエンジニアが使用するプロジェクトに貢献できているという実感は素晴らしいものです。"
        author:
          name: "Milko Venkov"
          role: "Software Developer, Infragistics"
        cta:
          text: "詳細を読む"
          url: "/stories/angular/"
      - logo:
          src: "images/home/logo-rutgers.svg"
          title: "Rutgers University"
        description: "Infragistics は Rutgers Division of Continuing Studies と提携し、Infragistics Ultimate、Indigo.Design、Reveal を含む UX、UI、分析ソフトウェアのフルポートフォリオへのアクセスを通じて、学生や教職員を支援しています。"
        quote: "学生、教職員、スタッフに Infragistics のソフトウェアソリューションを提供でき、デザイン、開発、コラボレーションの取り組みを加速させられることを大変嬉しく思います。"
        author:
          name: "Lee Pagenkopf"
          role: "Founding Manager, Rutgers Makerspace"
        cta:
          text: "詳細を読む"
          url: "/stories/rutgers/"
      - logo:
          src: "images/home/logo-stevens.svg"
          title: "Stevens Venture Center"
        description: "Stevens Venture Center (SVC) は、起業家をインフラ、リソース、資金援助に結びつけ、持続可能で成功した商業企業の開発を支援するために設計された革新的な起業エコシステムです。"
        quote: "テクノロジーと UX/UI の専門知識を惜しみなく共有してくれる Infragistics のようなパートナーの支援に感謝しています。"
        author:
          name: "Premal Kamdar"
          role: "Entrepreneur in Residence at the Stevens Venture Center"
        cta:
          text: "詳細を読む"
          url: "/stories/stevens/"

  # 7. Webinar on-demand
  - type: editorial
    direction: rtl
    surtitle: "オンデマンド ウェビナー"
    title: "最新のウェビナーをオンデマンドで視聴する"
    text: "最新のウェビナーから得られる専門的なインサイトを取り入れ、時代の先を行きましょう。一流のチームが Infragistics のツールをどのように活用して、より速く、よりスマートに、そしてより美しいアプリケーションを構築しているかを、ご自身のペースでいつでも学べます。"
    ctas:
      - text: "今すぐ視聴する"
        url: "/webinars/"
    image:
      src: "images/home/webinar.jpg"
      alt: "最新のオンデマンド ウェビナーを視聴する"
---