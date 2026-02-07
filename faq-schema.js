const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://forexlyglobal.vercel.app/#faq",
  "url": "https://forexlyglobal.vercel.app/",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does this Global Currency Converter support all currencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this Global Currency Converter supports over 160 global currencies including USD, INR, EUR, GBP, JPY, AED, AUD, CAD, and many others."
      }
    },
    {
      "@type": "Question",
      "name": "How to convert USD to INR using the Global Currency Converter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the amount in USD, select INR as the target currency, and click 'Get Exchange Rate' to see the latest conversion instantly. You can also reset the form to start over."
      }
    },
    {
      "@type": "Question",
      "name": "Is this Global Currency Converter free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this Global Currency Converter is completely free, works in real time, and does not require any subscription."
      }
    },
    {
      "@type": "Question",
      "name": "How often are exchange rates updated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Exchange rates are updated live in real-time using reliable financial data sources to ensure accurate conversions."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use this Global Currency Converter on mobile or tablet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this Global Currency Converter is fully responsive and works on all devices including desktop, mobile, and tablets."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert cryptocurrency using this Global Currency Converter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Currently, this Global Currency Converter supports only traditional fiat currencies and does not support cryptocurrencies."
      }
    },
    {
      "@type": "Question",
      "name": "Who can I contact for support or privacy questions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For any questions regarding privacy or support, you can contact the website owner through the official portfolio page."
      }
    },
    {
      "@type": "Question",
      "name": "Example conversions from this Global Currency Converter",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some popular conversions you can try: 1 USD = 83.50 INR, 1 EUR = 90.20 USD, 1 GBP = 140.10 JPY. Rates are live and update in real-time."
      }
    }
  ],
  "keywords": [
    "Global Currency Converter",
    "USD to INR",
    "free global currency exchange",
    "online money converter",
    "live exchange rates",
    "mobile friendly",
    "example conversions"
  ],
  "datePublished": "2026-02-07",
  "dateModified": "2026-02-07"
};

// create script tag
const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(faqSchema);

// add to head
document.head.appendChild(script);
