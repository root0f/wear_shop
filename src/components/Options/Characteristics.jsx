import React from 'react';
import Button from "../Button";

const Characteristics = ({
                           setSelectedSize,
                           setSelectedCapacity,
                           sizes,
                           capacity,
                           selectedSize,
                           selectedCapacity,
                           selectedPort,
                           selectedTouchId,
                           ports,
                           touchId,
                           setSelectedPort,
                           setSelectedTouchId,
  container,
                           className,
                         }) => {



  return (
    <>
      {
        sizes.length > 0
          ? (<div className={container}>
            <h3>Size:</h3>
            <div className={className}>
              {
                sizes.map(size =>
                  <Button
                    props={size.value}
                    onClick={() => setSelectedSize(size.value)}
                    key={size.id}
                    className={selectedSize === size.value ? 'active' : ''}/>
                )
              }
            </div>
          </div>)
          : capacity.length > 0 && (
          <div className={container}>
            <div className={`${className} capacity`}>
              <h3>Capacity:</h3>
              {
                capacity.map(capacity =>
                  <Button
                    props={capacity.value}
                    onClick={() => setSelectedCapacity(capacity.value)}
                    key={capacity.id}
                    className={selectedCapacity === capacity.value ? 'active' : ''}/>)
              }
            </div>
            {
              ports.length > 0 && touchId.length > 0 ? <>
                <div className={`${className} ports`}>
                  <h3>With USB 3 ports:</h3>
                  {
                    ports.map(port =>
                      <Button
                        onClick={() => setSelectedPort(port.id)}
                        className={selectedPort === port.id ? 'active' : ''}
                        props={port.value}
                        key={port.id}
                      />)
                  }
                </div>
                <div className={`${className} touch`}>
                  <h3>Touch ID in keyboard:</h3>
                  {
                    touchId.map(touch =>
                      <Button
                        onClick={() => setSelectedTouchId(touch.id)}
                        className={selectedTouchId === touch.id ? 'active' : ''}
                        props={touch.value}
                        key={touch.id}
                      />)
                  }
                </div>
              </> : null
            }
          </div>)
      }
    </>
  );
};

export default Characteristics;