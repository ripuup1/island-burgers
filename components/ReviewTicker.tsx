// Island Burgers & Bites — ReviewTicker
export default function ReviewTicker() {
  const reviews = [
    { text: '"Best burger I\'ve ever had."', source: "Google" },
    { text: '"The steak n\' cheese is unreal."', source: "TripAdvisor" },
    { text: '"Worth every minute of the wait."', source: "Yelp" },
    { text: '"We drove 45 minutes specifically for this."', source: "Google" },
    { text: '"Order online — trust me."', source: "Yelp" },
    { text: '"The Island Burger changed my life."', source: "Google" },
    { text: '"Best food at the beach. Period."', source: "TripAdvisor" },
  ];

  const stars = "★★★★★";

  // Duplicate for seamless loop
  const allReviews = [...reviews, ...reviews];

  return (
    <div className="overflow-hidden bg-charcoal py-4">
      <div className="animate-marquee flex w-max items-center gap-8">
        {allReviews.map((review, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="text-sm text-sun-yellow">{stars}</span>
            <span className="text-sm text-cream/90">
              {review.text}
            </span>
            <span className="text-xs text-cream/50">— {review.source}</span>
            <span className="text-island-red">●</span>
          </div>
        ))}
      </div>
    </div>
  );
}
