const Card = ({ category, services, image, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 h-full flex flex-col">
      <div className="relative flex-shrink-0">
        <img src={image} alt={category} className="w-full h-56 object-cover" />
        <a
          href={link}
          className="absolute top-2 right-2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{category}</h3>
        <div className="overflow-y-auto max-h-40">
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {services.map((service, index) => (
              <li key={index}>
                <a href={service.link} className="hover:text-blue-500 dark:hover:text-blue-400">
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;