import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import Video from '../../shared/video';
import { color } from '../../config';

const styles = StyleSheet.create({
  containerModal: { backgroundColor: color.black, margin: 0 },
});

function MovieModal({ visible, dismiss }) {
  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={dismiss}
      onBackdropPress={dismiss}
      swipeDirection="down"
      onSwipeComplete={dismiss}
      style={styles.containerModal}
    >
      <Video
        source={{
          uri:
            'https://r1---sn-npoeene6.googlevideo.com/videoplayback?id=f2be4cbb2228371f&itag=18&source=picasa&requiressl=yes&mvi=0&pl=24&sc=yes&ttl=transient&ei=bzcnXYimH7WS8gPyzonwCw&susc=ph&app=fife&mime=video/mp4&dur=10720.072&lmt=1562771718654417&ipbits=0&keepalive=yes&ratebypass=yes&ip=2a01:4f8:c2c:462c::1&expire=1562858383&sparams=app,dur,ei,expire,id,ip,ipbits,ipbypass,itag,lmt,mime,mip,mm,mn,ms,mv,mvi,pl,requiressl,sc,source,susc,ttl&signature=4B2C6CA868AFBC99DDCD93A9821A84E3CA20AA79.0B6014B65E8D6D7B907729A6ED45BAA4DD3888CC&key=cms1&mip=202.169.54.106&redirect_counter=1&rm=sn-4g5esy7e&req_id=9d736c6b32d936e2&cms_redirect=yes&ipbypass=yes&mm=30&mn=sn-npoeene6&ms=nxu&mt=1562853368&mv=u',
        }}
      />
    </Modal>
  );
}

export default MovieModal;
