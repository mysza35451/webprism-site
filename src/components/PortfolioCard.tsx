
interface PortfolioCardProps {
  clientName: string;
  industry: string;
  description: string;
  results: string;
  imageUrl?: string;
}

const PortfolioCard = ({
  clientName,
  industry,
  description,
  results,
  imageUrl,
}: PortfolioCardProps) => {
  return (
    <div className="
      bg-soft-white
      rounded-xl
      shadow-sm
      border border-light-silver
      overflow-hidden
      hover-lift group
      transition-all duration-300
      hover:border-prism-blue/30
    ">
      <div className="
        h-48
        bg-gradient-to-br from-prism-blue to-electric-violet
        flex items-center justify-center
        overflow-hidden
      ">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={clientName}
            className="
              max-h-24
              max-w-2/3
              object-contain
              group-hover:scale-105
              transition-transform duration-500
            "
          />
        ) : (
          <div className="
            w-full h-full
            flex items-center justify-center
            group-hover:scale-105
            transition-transform duration-500
          ">
            <div className="text-soft-white text-center">
              <div className="text-2xl font-bold mb-2">{clientName}</div>
              <div className="text-soft-white/80">{industry}</div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-prism-blue">
            {clientName}
          </h3>
          <span className="
            text-sm
            text-electric-violet
            bg-electric-violet/10
            px-3 py-1
            rounded-full
            font-medium
          ">
            {industry}
          </span>
        </div>

        <p className="text-cool-grey mb-4 leading-relaxed">
          {description}
        </p>

        <div className="
          bg-mint-green/10
          p-4
          rounded-lg
          border border-mint-green/20
        ">
          <p className="text-prism-blue font-medium text-sm">
            {results}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
