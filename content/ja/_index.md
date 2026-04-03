---
isIndex: true
draft: false
title: ホーム
blocks:
  # 1. Cycling text — navy CTA hero banner
  - type: title
    background: true
    heading:
      title: "%sを1つのアプリで世界に創造する。"
      text: "適切なツールを使えば、ユーザーに驚くべき体験を提供できます。"
    cycling_words:
      - "シンプルさ"
      - "美しさ"
      - "革新"
    ctas:
      - text: "無料トライアルを開始"
        url: "/trial/"
      - text: "料金を見る"
        url: "/pricing/"

  # 2. Heading with subheading
  - type: title
    heading:
      surtitle: "30年以上にわたるシンプルで美しい体験"
      title: "適切なツールで素晴らしい体験を創造できます。"
      text: "私たちの職人魂への情熱は、デジタル製品チーム全体の生産性を向上させ、組織全体でデータ駆動型・高性能のチームを実現するシンプルで美しい体験を提供したいという願いから生まれました。30年間の経験に基づき、細部まで注意を払いながら構築しています。"

  # 3. Products — three cards in a row
  - type: informations
    column: 3
    items:
      - title: "Ultimate UI & Development Toolkit"
        text: "Infragistics Ultimateでアプリ開発時間を半減。ウェブ・モバイル・デスクトップといったチームが対象とするあらゆるプラットフォーム向けに、数百のUIコントロールとコンポーネントを提供します。"
        cta:
          text: "もっと知る"
          url: "/products/ultimate/"
        image:
          src: "images/home/ui-dashboard.webp"
          alt: "Ultimate UI toolkit dashboard"
      - title: "Embedded Analytics"
        text: "Revealを使って、美しいセルフサービス型ダッシュボードをアプリに直接統合します。ユーザーは製品を離れることなくデータを探索し、意思決定ができます。"
        cta:
          text: "もっと知る"
          url: "/products/reveal/"
        image:
          src: "images/home/analytics-dashboard.webp"
          alt: "Embedded analytics dashboard"
      - title: "Work Management for Modern Teams"
        text: "Slingshotは、プロジェクト管理・データ分析・チームチャットを統合したオールインワンのデジタルワークプレイスです。組織全体がより迅速に動けます。"
        cta:
          text: "もっと知る"
          url: "/products/slingshot/"
        image:
          src: "images/home/slingshot.webp"
          alt: "Slingshot work management"

  # 4. Logo grid
  - type: logos
    column: 6
    heading:
      title: "本当に重要なストーリー"
      text: "200万人以上の開発者がInfragistics UXとUIツールキットを使い、世界クラスのアプリケーションを構築しています。"
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
      - quote: "Slingshotは、部署横断的なチーム協力の仕方を変革しました。リアルタイムで全プロジェクトを完全に可視化できます。"
        author:
          title: "Cibao Meat Products"
      - quote: "Infragisticsは、ゼロから構築するより3倍速く薬局のインサイトを提供するために必要な分析コンポーネントを提供しました。"
        author:
          title: "Scriptly"
      - quote: "Ignite UIのおかげで、レガシーの産業監視システムを記録的な速度でAngularへ刷新しました。"
        author:
          title: "Bentley Nevada"
      - quote: "Infragisticsは、日常業務を中断することなく重要な取引プラットフォームをモダンスタックへ移行するのを支援しました。"
        author:
          title: "UK Investment Bank"

  # 5. Latest news
  - type: latest
    section: blog
    count: 4
    heading:
      title: "最新ニュースと機能で常に最新情報を得る"
    footing:
      ctas:
        - text: "すべてのニュースと記事を見る"
          url: "/blog/"

  # 6. Trusted partners — logo expand testimonials
  - type: logo-testimonials
    heading:
      title: "信頼できるパートナーと認定"
    items:
      - logo:
          src: "images/home/logo-microsoft.svg"
          title: "Microsoft Gold Partner"
        description: "Gold Microsoftパートナーとして、InfragisticsはMicrosoft開発者エコシステムのリーダーとして活発に活動し、.NETアプリケーションの開発をスムーズにするコントロール、コンポーネント、ツールをあらゆるプラットフォームやデバイス向けに提供しています。"
        quote: "Infragisticsは、ほぼ3十年にわたりMicrosoftパートナーです。この親密な関係を通じて、Microsoftが自社製品で使用している技術を構築しただけでなく、.NETを支えるツールやフレームワークを拡張し、共同顧客が次世代のエンタープライズアプリケーションを構築する際に活用しています。"
        author:
          name: "Jason Beres"
          role: "Chief Operating Officer, Infragistics"
      - logo:
          src: "images/home/logo-angular.svg"
          title: "Angular Framework"
        description: "InfragisticsはAngularエコシステムへの積極的な貢献者であり、GoogleのAngularチームと直接協力してオープンソースのAngularコンポーネントに貢献し、MaterialベースかつAngularネイティブUIコンポーネントの最も完全な商用ライブラリ、Ignite UI for Angularを提供しています。"
        quote: "結局、私は自分の仕事に本当に満足しました。プロジェクトに責任を持つ人々が新しいアイデアにオープンでとてもフレンドリーだと知り、何万人ものエンジニアが使っているプロジェクトに貢献しているという感覚は素晴らしいと感じました。"
        author:
          name: "Milko Venkov"
          role: "Software Developer, Infragistics"
        cta:
          text: "続きを読む"
          url: "/stories/angular/"
      - logo:
          src: "images/home/logo-rutgers.svg"
          title: "Rutgers University"
        description: "InfragisticsはRutgers Continuing Studies部門と提携し、学生と教職員がInfragisticsのUX、UI、分析ソフトウェアの全ポートフォリオ（Infragistics Ultimate、Indigo.Design、Reveal）にアクセスできるよう支援しています。"
        quote: "私たちは、学生、教職員、スタッフにInfragisticsソフトウェアソリューションを提供できることを嬉しく思います。これにより、デザイン、開発、協力の取り組みが加速します。"
        author:
          name: "Lee Pagenkopf"
          role: "Founding Manager, Rutgers Makerspace"
        cta:
          text: "続きを読む"
          url: "/stories/rutgers/"
      - logo:
          src: "images/home/logo-stevens.svg"
          title: "Stevens Venture Center"
        description: "Stevens Venture Center（SVC）は、Stevens企業家をインフラストラクチャー、リソース、資金援助と結びつけ、持続可能で成功する商業企業を開発できるように設計された革新的な起業エコシステムです。"
        quote: "Infragisticsのようなパートナーからの支援に感謝しています。彼らは技術とUX/UI専門知識を共有することをいとわず、支援してくれます。"
        author:
          name: "Premal Kamdar"
          role: "Entrepreneur in Residence at the Stevens Venture Center"
        cta:
          text: "続きを読む"
          url: "/stories/stevens/"

  # 7. Webinar on-demand
  - type: editorial
    direction: rtl
    surtitle: "オンデマンドウェビナー"
    title: "最新ウェビナーをオンデマンドで視聴"
    text: "最新ウェビナーから得られる専門家の洞察で、業界の先を行きましょう。リードチームがInfragisticsツールを使ってより速く、より賢く、より美しいアプリケーションを構築する方法を、あなたのペースで、いつでも学べます。"
    ctas:
      - text: "今すぐ視聴"
        url: "/webinars/"
    image:
      src: "images/home/webinar.jpg"
      alt: "最新ウェビナーをオンデマンドで視聴"
---