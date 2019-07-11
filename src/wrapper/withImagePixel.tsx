import React, { useState, useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';

function withImagePixel(WrappedComponent) {
  function WrapperComponent(props) {
    const { style, ...otherProps } = props;
    const uri = props.source.uri;
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
      Image.getSize(uri, (width, height) => {
        if (props.width && !props.height) {
          setWidth(props.width);
          setHeight(height * (props.width / width));
        } else if (!props.width && props.height) {
          setWidth(width * (props.height / height));
          setHeight(props.height);
        } else {
          setWidth(width);
          setHeight(height);
        }
      }, null);
    }, []);
    const styles = StyleSheet.flatten([style, { width, height }]);

    return <WrappedComponent {...otherProps} style={styles} />;
  }

  return WrapperComponent;
}

export default withImagePixel;
