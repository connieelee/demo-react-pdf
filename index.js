import React from 'react';
import ReactPDF from '@react-pdf/node';
import {
  Text,
  Document,
  Font,
  Page,
  StyleSheet,
  Image,
  View,
} from '@react-pdf/core';

const styles = StyleSheet.create({});

Font.register(`${__dirname}/fonts/NolanNext/Kastelov - NolanNext-Regular.otf`, {
  family: 'Nolan-Next',
});

const Sample = (props) => {
  return (
    <Document
      author="Luke Skywalker"
      keywords="awesome, resume, start wars"
      subject="The resume of Luke Skywalker"
      title="Resume"
    >
      <Page size="letter">
        <View>
          <View>
            <Image src="https://images.gr-assets.com/characters/1264613782p8/1783.jpg" />
          </View>
        <Text>this is a footer</Text>
        </View>
      </Page>
    </Document>
  );
};

ReactPDF.render(<Sample />, `${__dirname}/output.pdf`)
.then(pdf => console.log(pdf))
.catch(err => console.error(err));
