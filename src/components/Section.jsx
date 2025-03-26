const Section = ({ id, title, subtitle, children, className }) => {
  return (
    <section
      id={id}
      className={`py-20 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 ${className}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">{title}</h2>
        <p className="text-center mb-4">{subtitle}</p>
        {children}
      </div>
    </section>
  );
};

export default Section;
