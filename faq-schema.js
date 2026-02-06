const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does this currency converter support all currencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, this currency converter supports more than 160 global currencies including USD, INR, EUR, GBP, JPY, and many others."
            }
          },
          {
            "@type": "Question",
            "name": "How to convert USD to INR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enter the amount in USD, select INR, and click Get Exchange Rate to see the latest conversion."
            }
          },
          {
            "@type": "Question",
            "name": "Is this currency converter free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, this online currency converter is completely free and works in real time."
            }
          }
        ]
      };
      
      // create script tag
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(faqSchema);
      
      // add to head
      document.head.appendChild(script);
        
/*

*/

      

      