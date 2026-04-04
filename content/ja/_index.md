---
isIndex: true
draft: false
title: Home
blocks:
  # 1. サイクルテキスト - 海軍CTAヘロバナー
  - type: title
    background: true
    heading:
      title: "世界でアプリ一つずつ%sを創りましょう。"
      text: "正しいツールがあれば、ユーザーに素晴らしい体験を提供することができます。"
    cycling_words:
      - "シンプルさ"
      - "美しさ"
      - "革新性"
    ctas:
      - text: "無料トライアルを開始"
        url: "/trial/"
      - text: "価格を見る"
        url: "/pricing/"

  # 2. サブヘッダー付きヘッダー
  - type: title
    heading:
      surtitle: "30年以上のシンプルで美しい体験"
      title: "正しいツールがあれば、素晴らしい体験を創ることができます。"
      text: "我々のクラフトマンシップへの情熱は、デジタル製品チーム全体での生産性向上とデータ駆動型の高パフォーマンスチームへの支援という単純で美しい体験を提供することから生まれています。過去30年の経験に基づいて、細部にわたるケアと注意を込めて構築されています。"

  # 3. 製品 - 3つのカード
  - type: informations
    column: 3
    items:
      - title: "究極のUI & 開発ツールキット"
        text: "Infragistics Ultimateを使用して、チームがターゲットとするすべてのプラットフォーム向けに数百種類のUIコントロールとコンポーネントを用いてアプリケーションを半分の時間でデリバリーできます。"
        cta:
          text: "詳しく見る"
          url: "/products/ultimate/"
        image:
          src: "images/home/ui-dashboard.webp"
          alt: "Ultimate UIツールキットダッシュボード"
      - title: "組み込み分析"
        text: "Revealを使用して、美しいセルフサービスダッシュボードをアプリケーションに直接統合します。ユーザーが製品から離れる必要なくデータを探索し、決定を行うことができます。"
        cta:
          text: "詳しく見る"
          url: "/products/reveal/"
        image:
          src: "images/home/analytics-dashboard.webp"
          alt: "組み込み分析ダッシュボード"
      - title: "現代のチーム向けワークマネージメント"
        text: "Slingshotはプロジェクト管理、データアナリティクス、チームチャットを一つにまとめたデジタルワークプレイスです。組織全体がより速く進むことができます。"
        cta:
          text: "詳しく見る"
          url: "/products/slingshot/"
        image:
          src: "images/home/slingshot.webp"
          alt: "Slingshotワークマネージメント"

  # 4. ロゴグリッド
  - type: logos
    column: 6
    heading:
      title: "本当に関わる物語"
      text: "200万人以上の開発者がInfragistics UXとUIツールキットを使用して世界クラスのアプリケーションを構築しています。"
    items:
      - src: "images/home/logos1.jpg"
        title: "ロゴ1"
      - src: "images/home/logos2.jpg"
        title: "ロゴ2"
      - src: "images/home/logos3.jpg"
        title: "ロゴ3"
      - src: "images/home/logos4.jpg"
        title: "ロゴ4"
      - src: "images/home/logos5.jpg"
        title: "ロゴ5"
      - src: "images/home/logos6.jpg"
        title: "ロゴ6"
      - src: "images/home/logos7.jpg"
        title: "ロゴ7"
      - src: "images/home/logos8.jpg"
        title: "ロゴ8"
      - src: "images/home/logos9.jpg"
        title: "ロゴ9"
      - src: "images/home/logos10.jpg"
        title: "ロゴ10"
      - src: "images/home/logos11.jpg"
        title: "ロゴ11"
      - src: "images/home/logos12.jpg"
        title: "ロゴ12"

  # 4b. カスタマーストーリーキャラousel
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
      - quote: "Slingshotは、チームが部門間でコラボレーションする方法を変革しました。すべてのプロジェクトに対するリアルタイムでの完全な可視性があります。"
        author:
          title: "Cibao Meat Products"
      - quote: "Infragisticsは、私たちが必要とする分析コンポーネントを提供し、薬局洞察をゼロから開発するよりも3倍速く提供しました。"
        author:
          title: "Scriptly"
      - quote: "Ignite UIを使用してレガシーアプリケーションのモダン化を記録的な速さでAngularに移行しました。"
        author:
          title: "Bentley Nevada"
      - quote: "Infragisticsは重要な取引プラットフォームを現代のスタックに移行させ、日常の運用を中断することなく支援しました。"
        author:
          title: "UK Investment Bank"

  # 5. 最新ニュース
  - type: latest
    section: blog
    count: 4
    heading:
      title: "最新のニュースと機能で常に最新の状態を保つ"
    footing:
      ctas:
        - text: "すべてのニュースと記事を見る"
          url: "/blog/"

  # 6. 信頼できるパートナー - ロゴ展開証言
  - type: logo-testimonials
    heading:
      title: "信頼できるパートナー & 認定"
    items:
      - logo:
          src: "images/home/logo-microsoft.svg"
          title: "Microsoft Gold Partner"
        description: "Infragisticsは30年以上にわたってMicrosoftの開発者エコシステムのアクティブなリーダーとして、.NETアプリケーションを開発するための制御、コンポーネント、ツールを提供し続けています。"
        quote: "Infragisticsは約30年間、Microsoftパートナーとして活動しています。この緊密な関係を通じて、私たちはMicrosoft製品に使用された技術だけでなく、.NETでバックアップされている当社の共同顧客が次世代のエンタープライズアプリケーションを構築するために使用するツールやフレームワークを開発してきました。"
        author:
          name: "Jason Beres"
          role: "Infragistics CEO"
      - logo:
          src: "images/home/logo-angular.svg"
          title: "Angular Framework"
        description: "InfragisticsはAngularエコシステムへの積極的な貢献者であり、GoogleのAngularチームと直接協力してオープンソースのAngularコンポーネントに貢献しています。また、Ignite UI for Angularとして提供される最も包括的な商用ライブラリも提供しています。"
        quote: "最終的には私の仕事に非常に満足しました。多くのことを学びました - プロジェクトを担当している人々が新しいアイデアに対して開かれていて非常にフレンドリーであることが分かり、数万人のエンジニアが使用するプロジェクトに貢献しているという感覚は素晴らしいものです。"
        author:
          name: "Milko Venkov"
          role: "Infragisticsソフトウェア開発者"
        cta:
          text: "詳細を見る"
          url: "/stories/angular/"
      - logo:
          src: "images/home/logo-rutgers.svg"
          title: "Rutgers University"
        description: "Infragisticsはルターセージの継続教育学部とパートナーシップを組んでおり、学生や教員が完全なUX、UI、およびアナリティクスソフトウェアにアクセスできるようにしています。"
        quote: "私たちは、私たちの学生、教師、スタッフがデザイン、開発、コラボレーションの努力を加速するためにInfragisticsソリューションを使用できることに非常に喜んでいます。"
        author:
          name: "Lee Pagenkopf"
          role: "Rutgers Makerspace創設者マネージャー"
        cta:
          text: "詳細を見る"
          url: "/stories/rutgers/"
      - logo:
          src: "images/home/logo-stevens.svg"
          title: "Stevens Venture Center"
        description: "Stevens Venture Center（SVC）は、起業家が持続的で成功した商業エンタープライズを開発するためのインフラストラクチャ、リソース、資金援助を結びつける革新的な起業生態系です。"
        quote: "Infragisticsのようなパートナーからのサポートに感謝しています。彼女たちは技術とUX/UIの専門知識を共有しています。"
        author:
          name: "Premal Kamdar"
          role: "Stevens Venture Centerの起業家リジデント"
        cta:
          text: "詳細を見る"
          url: "/stories/stevens/"

  # 7. オンデマンドウェビナー
  - type: editorial
    direction: rtl
    surtitle: "オンデマンドウェビナー"
    title: "最新のオンデマンドウェビナーウォッチ"
    text: "エキスパートからの洞察を入手して、カーブの先に進みましょう。主要なチームがInfragisticsツールを使用してより速く、スマートで美しくアプリケーションを作成する方法について学びます - 自己ペースでいつでも。"
    ctas:
      - text: "今すぐ視聴"
        url: "/webinars/"
    image:
      src: "images/home/webinar.jpg"
      alt: "最新のオンデマンドウェビナーを視聴"
---