const DayNightSwitch = ({ isNightMode, toggle }) => {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={isNightMode}
          onChange={toggle}
        />
        <div className="w-14 h-8 bg-blue-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-yellow-300 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-black peer-checked:after:bg-black peer-checked:after:shadow-[inset_9px_0px_1px_0px_white] peer-checked:after:rounded-[50px]"></div>
      </label>
    );
  };
  
  export default DayNightSwitch;