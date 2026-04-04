---
isIndex: true
draft: false
title: ホーム
blocks:
  # 1. サイクルテキスト — 海軍CTAヘロバナー
  - type: title
    background: true
    heading:
      title: "世界で一つのアプリケーションを作りましょう。シンプルさ、美しさ、革新性%s"
      text: "正しいツールがあれば、ユーザーに素晴らしい体験を提供できます。"
    cycling_words:
      - "シンプルさ"
      - "美しさ"
      - "革新性"
    ctas:
      - text: "無料トライアル開始"
        url: "/trial/"
      - text: "料金を見る"
        url: "/pricing/"

  # 2. サブタイトル付きヘッダー
  - type: title
    heading:
      surtitle: "30年以上のシンプルで美しい体験"
      title: "正しいツールがあれば、素晴らしい体験を作成できます。"
      text: "私たちの職人としての情熱は、デジタルプロダクトチーム全体での生産性を高めるために、シンプルで美しい体験を提供したいという思いから生まれました。また、組織全体のデータ駆動型かつ高いパフォーマンスを持つチームに力を与えることを可能にします。過去30年間の学びや経験に基づいて、細部に至るまで注意を払って作られました。"

  # 3. 製品 — 行列の3つのカード
  - type: informations
    column: 3
    items:
      - title: "究極のUI & 開発ツールキット"
        text: "Infragistics Ultimateを使用してアプリケーションを半分の時間で提供できます。ウェブ、モバイル、デスクトップ向けに、チームが対象とする各プラットフォーム用の数百のUIコントロールとコンポーネントが揃っています。"
        cta:
          text: "詳しく見る"
          url: "/products/ultimate/"
        image:
          src: "images/home/ui-dashboard.webp"
          alt: "Ultimate UIツールキットダッシュボード"
      - title: "組み込み分析"
        text: "Revealを使用して、美しい自宅でのセルフサービスダッシュボードをアプリケーションに直接統合します。ユーザーがデータを探索し、製品から離れることなく決定を下すことができます。"
        cta:
          text: "詳しく見る"
          url: "/products/reveal/"
        image:
          src: "images/home/analytics-dashboard.webp"
          alt: "組み込み分析ダッシュボード"
      - title: "現代のチーム向けワークマネージメント"
        text: "Slingshotは、プロジェクト管理、データアナリティクス、チームチャットを一元化した完全なデジタルワークプレイスです。これにより組織全体がより速く進むことができます。"
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
      title: "本当に重要なストーリー"
      text: "200万人以上の開発者がInfragistics UXおよびUIツールキットを使用して世界クラスのアプリケーションを構築しています。"
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

  # 4b. カスタマーストーリーカルーセル
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
      - quote: "Slingshotは、チームが部門をまたいで協調する方法を変革しました。リアルタイムで全てのプロジェクトの全範囲を見ることができます。"
        author:
          title: "Cibao Meat Products"
      - quote: "Infragisticsにより、 pharmacy insights を3倍速く提供できました。ゼロから作成するよりも効率的でした。"
        author:
          title: "Scriptly"
      - quote: "Ignite UIのおかげで、レガシーアプリケーションをAngularに記録的な時間でモダン化しました。"
        author:
          title: "Bentley Nevada"
      - quote: "Infragisticsにより、重要な取引プラットフォームを現代のスタックに移行することができました。日常業務に影響を与えることなくです。"
        author:
          title: "UK Investment Bank"

  # 5. 最新ニュース
  - type: latest
    section: blog
    count: 4
    heading:
      title: "最新のニュースと機能について詳しく知る"
    footing:
      ctas:
        - text: "全てのニュースと記事を見る"
          url: "/blog/"

  # 6. 信頼されるパートナー — ロゴ展開証言
  - type: logo-testimonials
    heading:
      title: "信頼できるパートナー & 認定"
    items:
      - logo:
          src: "images/home/logo-microsoft.svg"
          title: "Microsoft Gold Partner"
        description: "Infragisticsは、Gold Microsoftパートナーとして、.NETアプリケーションの開発を促進するためのコントロール、コンポーネント、ツールを提供し続けています。それは任意のプラットフォームやデバイス上での開発をスムーズに行うことができます。"
        quote: "Infragisticsは30年以上にわたってMicrosoftパートナーであり、その密接な関係を通じて当社はMicrosoft製品にも使用されている技術を構築するとともに、.NETがバックアップするツールとフレームワークを開発し続けています。これにより共同顧客が次世代のエンタープライズアプリケーションを作成できるようになりました。"
        author:
          name: "Jason Beres"
          role: "Infragistics チーフ・オペレーション・オフィサー"
      - logo:
          src: "images/home/logo-angular.svg"
          title: "Angular Framework"
        description: "Infragisticsは、GoogleのAngularチームと直接協力してオープンソースのAngularコンポーネントに貢献しており、Ignite UI for Angularという最も完全な商用ライブラリを提供しています。これによりMaterialベースの、AngularネイティブUIコンポーネントを使用できます。"
        quote: "最終的に私の仕事が大好きでした。多くのことを学びました — プロジェクトに関与している人々が新しいアイデアに開かれていて非常にフレンドリーであると感じる一方で、何万人ものエンジニアが使用するプロジェクトに貢献しているという感覚は素晴らしいものです。"
        author:
          name: "Milko Venkov"
          role: "Infragistics ソフトウェア・ディベロッパー"
        cta:
          text: "詳しく読む"
          url: "/stories/angular/"
      - logo:
          src: "images/home/logo-rutgers.svg"
          title: "Rutgers University"
        description: "Infragisticsは、Rutgers Division of Continuing Studiesとパートナーシップを結び、学生や教員にその完全なUX、UIおよびアナリティクスソフトウェアへのアクセスを提供しています。これは Infragistics Ultimate, Indigo.Design そして Reveal を含んでいます。"
        quote: "Infragisticsのソフトウェアソリューションが私たちの学生、教員、スタッフの設計、開発、協調作業にスピードアップすることを歓迎します。"
        author:
          name: "Lee Pagenkopf"
          role: "Rutgers Makerspace 設立マネージャー"
        cta:
          text: "詳しく読む"
          url: "/stories/rutgers/"
      - logo:
          src: "images/home/logo-stevens.svg"
          title: "Stevens Venture Center"
        description: "Stevens Venture Center (SVC)は、スティーブンズのエンtrepreneurが持続可能で成功した商業企業を開発するためのインフラストラクチャ、リソース、資金援助を提供する革新的なエンタープライズエコシステムです。"
        quote: "Infragisticsのようなパートナーからの支援に感謝しています。技術とUX/UIの専門知識を共有してくれるからです。"
        author:
          name: "Premal Kamdar"
          role: "Stevens Venture Center エンtrepreneur in Residence"
        cta:
          text: "詳しく読む"
          url: "/stories/stevens/"

  # 7. Webinarオンデマンド
  - type: editorial
    direction: rtl
    surtitle: "オンデマンドWebinar"
    title: "最新のWebinarをオンデマンドで視聴する"
    text: "専門家からの洞察により、競争力を維持しましょう。Infragisticsツールを使用して、より速く、賢く、そして美しいアプリケーションを作成しているリーダークラスのチームについて学びます — ご自分のペースでいつでも視聴できます。"
    ctas:
      - text: "今すぐ視聴する"
        url: "/webinars/"
    image:
      src: "images/home/webinar.jpg"
      alt: "最新のWebinarをオンデマンドで視聴してください"
---