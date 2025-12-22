import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <Quote size={24} className="text-secondary" />
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < rating ? "fill-secondary text-secondary" : "text-muted"
              }
            />
          ))}
        </div>
      </div>

      <p className="text-foreground mb-6 leading-relaxed italic">{`"${content}"`}</p>

      <div className="flex items-center gap-4">
        <img
          src={avatar || "/placeholder.svg"}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
