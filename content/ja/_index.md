---
isIndex: true
draft: false
title: ホーム
blocks:
  # 1. Cycling text — navy CTA hero banner
  - type: title
    background: true
    heading:
      title: "アプリひとつひとつで、世界に %s を生み出しましょう。"
      text: "適切なツールがあれば、ユーザーに素晴らしい体験を提供できます。"
    cycling_words:
      - "シンプルさ"
      - "美しさ"
      - "イノベーション"
    ctas:
      - text: "無料トライアルを開始"
        url: "/trial/"
      - text: "料金プランを見る"
        url: "/pricing/"

  # 2. Heading with subheading
  - type: title
    heading:
      surtitle: "30年以上にわたる、シンプルで美しい体験の提供"
      title: "適切なツールがあれば、素晴らしい体験を創造できます。"
      text: "私たちのものづくりへの情熱は、デジタル製品チームの生産性を向上させ、組織全体でデータ駆動型の高性能なチームを実現する、シンプルで美しい体験を提供したいという願いから生まれています。過去30年間にわたり培ってきた専門知識に基づき、あらゆる細部にまでこだわり、丁寧に構築されています。"

  # 3. Products — three cards in a row
  - type: informations
    column: 3
    items:
      - title: "Ultimate UI & 開発ツールキット"
        text: "Infragistics Ultimate を使用すれば、アプリの開発時間を半分に短縮できます。Web、モバイル、デスクトップなど、チームがターゲットとするあらゆるプラットフォーム向けに、数百種類の UI コントロールとコンポーネントを提供します。"
        cta:
          text: "詳細を見る"
          url: "/products/ultimate/"
        image:
          src: "images/home/ui-dashboard.webp"
          alt: "Ultimate UI ツールキットのダッシュボード"
      - title: "Embedded Analytics"
        text: "Reveal を使用して、美しくセルフサービスなダッシュボードをアプリケーションに直接統合できます。ユーザーは製品を離れることなく、データを探索して意思決定を行うことができます。"
        cta:
          text: "詳細を見る"
          url: "/products/reveal/"
        image:
          src: "images/home/analytics-dashboard.webp"
          alt: "組み込み分析ダッシュボード"
      - title: "モダンチームのためのワークマネジメント"
        text: "Slingshot は、プロジェクト管理、データ分析、チームチャットを組み合わせたオールインワンのデジタルワークプレイスであり、組織全体のスピードを向上させます。"
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
      title: "価値ある成功事例"
      text: "200万人以上の開発者が、世界クラスのアプリケーションを構築するために Infragistics UX および UI ツールキットを使用しています。"
    items:
      - src: "images/home/logos1.jpg"
        title: "ロゴ 1"
      - src: "images/home/logos2.jpg"
        title: "ロゴ 2"
      - src: "images/home/logos3.jpg"
        title: "ロゴ 3"
      - src: "images/home/logos4.jpg"
        title: "ロゴ 4"
      - src: "images/home/logos5.jpg"
        title: "ロゴ 5"
      - src: "images/home/logos6.jpg"
        title: "ロゴ 6"
      - src: "images/home/logos7.jpg"
        title: "ロゴ 7"
      - src: "images/home/logos8.jpg"
        title: "ロゴ 8"
      - src: "images/home/logos9.jpg"
        title: "ロゴ 9"
      - src: "images/home/logos10.jpg"
        title: "ロゴ 10"
      - src: "images/home/logos11.jpg"
        title: "ロゴ 11"
      - src: "images/home/logos12.jpg"
        title: "ロゴ 12"

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
      - quote: "Slingshot は、部門を越えたチームのコラボレーション方法を一変させました。すべてのプロジェクトをリアルタイムで完全に可視化できるようになりました。"
        author:
          title: "Cibao Meat Products"
      - quote: "Infragistics が提供する分析コンポーネントのおかげで、ゼロから構築するよりも 3 倍速く薬局向けインサイト機能をリリースできました。"
        author:
          title: "Scriptly"
      - quote: "Ignite UI のおかげで、レガシーな産業用モニタリングシステムを記録的な速さで Angular に近代化できました。"
        author:
          title: "Bentley Nevada"
      - quote: "Infragistics の支援により、日常業務に影響を与えることなく、重要な取引プラットフォームをモダンなスタックへ移行することができました。"
        author:
          title: "UK Investment Bank"

  # 5. Latest news
  - type: latest
    section: blog
    count: 4
    heading:
      title: "最新のニュースと機能で常に最新情報を入手してください"
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
        description: "Microsoft Gold パートナーとして、Infragistics は Microsoft 開発者エコシステムの積極的なリーダーであり続け、あらゆるプラットフォームやデバイスでの .NET アプリケーション開発を効率化するコントロール、コンポーネント、ツールを提供しています。"
        quote: "Infragistics は 30 年近くにわたり Microsoft のパートナーを務めてきました。この緊密な関係を通じて、Microsoft が製品で使用するテクノロジーを構築しただけでなく、Microsoft プラットフォームを最大限に活用し拡張することで、共同顧客が次世代のエンタープライズアプリケーションを構築する際に使用する .NET ベースのツールとフレームワークを提供してきました。"
        author:
          name: "Jason Beres"
          role: "Infragistics 最高執行責任者 (COO)"
      - logo:
          src: "images/home/logo-angular.svg"
          title: "Angular Framework"
        description: "Infragistics は Angular エコシステムに積極的に貢献しており、Google の Angular チームと直接協力してオープンソースの Angular コンポーネントに寄与するとともに、最も完全な商用 Material ベースの Angular ネイティブ UI コンポーネントライブラリである Ignite UI for Angular を提供しています。"
        quote: "最終的に、自分の仕事にとても満足しました。多くのことを学び、プロジェクト責任者が新しいアイデアにオープンで非常にフレンドリーであること、そして数万人のエンジニアが使用するプロジェクトに貢献しているという感覚は素晴らしいものでした。"
        author:
          name: "Milko Venkov"
          role: "Infragistics ソフトウェア開発者"
        cta:
          text: "詳細を読む"
          url: "/stories/angular/"
      - logo:
          src: "images/home/logo-rutgers.svg"
          title: "Rutgers University"
        description: "Infragistics は Rutgers Division of Continuing Studies と提携し、Infragistics Ultimate、Indigo.Design、Reveal を含む UX、UI、分析ソフトウェアの全ポートフォリオへのアクセスを通じて、学生と教職員を支援しています。"
        quote: "学生、教職員、スタッフに、デザイン、開発、コラボレーションの取り組みを加速させる Infragistics のソフトウェアソリューションを提供できることを嬉しく思います。"
        author:
          name: "Lee Pagenkopf"
          role: "Rutgers Makerspace 創設マネージャー"
        cta:
          text: "詳細を読む"
          url: "/stories/rutgers/"
      - logo:
          src: "images/home/logo-stevens.svg"
          title: "Stevens Venture Center"
        description: "Stevens Venture Center (SVC) は、Stevens の起業家がインフラ、リソース、資金調達支援を利用し、持続可能で成功する商業企業を開発できるように設計された革新的な起業エコシステムです。"
        quote: "テクノロジーと UX/UI の専門知識を共有してくれる Infragistics のようなパートナーのサポートに感謝しています。"
        author:
          name: "Premal Kamdar"
          role: "Stevens Venture Center 客員起業家"
        cta:
          text: "詳細を読む"
          url: "/stories/stevens/"

  # 7. Webinar on-demand
  - type: editorial
    direction: rtl
    surtitle: "オンデマンド ウェビナー"
    title: "最新のウェビナーをオンデマンドで視聴"
    text: "最新のウェビナーによる専門的な知見で、常に時代の先を行きましょう。一流のチームが Infragistics のツールを使用して、より速く、よりスマートに、そしてより美しいアプリケーションをどのように構築しているかを、ご自身のペースで、いつでもご確認いただけます。"
    ctas:
      - text: "今すぐ視聴"
        url: "/webinars/"
    image:
      src: "images/home/webinar.jpg"
      alt: "最新のウェビナーをオンデマンドで視聴"
---