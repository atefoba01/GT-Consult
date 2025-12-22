import { Star } from "lucide-react";

interface BlogPostCardProps {
  title: string;
  image: string;
  rating: number;
  description: string;
  category: string;
  date: string;
}

export default function BlogPostCard({
  title,
  image,
  rating,
  description,
  category,
  date,
}: BlogPostCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
          {category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={
                i < rating ? "fill-secondary text-secondary" : "text-muted"
              }
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">
            ({rating}/5)
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">{date}</span>
          <button className="text-secondary font-semibold hover:text-accent transition-colors">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
}
