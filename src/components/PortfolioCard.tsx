
interface PortfolioCardProps {
  clientName: string;
  industry: string;
  description: string;
  results: string;
  imageUrl?: string;
}

const PortfolioCard = ({ clientName, industry, description, results, imageUrl }: PortfolioCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
        {imageUrl ? (
          <img src={imageUrl} alt={clientName} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold mb-2">{clientName}</div>
              <div className="text-blue-100">{industry}</div>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{clientName}</h3>
          <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{industry}</span>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-green-800 font-medium text-sm">{results}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
