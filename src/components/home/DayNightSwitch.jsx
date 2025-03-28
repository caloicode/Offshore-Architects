import styled from 'styled-components';

const DayNightSwitch = ({ isNightMode, toggle }) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input 
          type="checkbox" 
          checked={isNightMode}
          onChange={toggle}
        />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3em;
    height: 1.5em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
    transition: .4s;
    border-radius: 5px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1em;
    width: 0.1em;
    border-radius: 0px;
    left: 0.3em;
    bottom: 0.3em;
    background-color: white;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(0, 0, 0);
  }

  input:checked + .slider:before {
    transform: translateX(2.3em) rotate(360deg);
  }
`;

export default DayNightSwitch;