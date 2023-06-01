import React from "react";
// import { Button } from "react-native";
import { View,Button } from "react-native-web";
import RazorpayCheckout from 'react-native-razorpay';

function Payment() {

    // const makePayment =() => {       
    // }

    return(
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Button
            title="Make a Payment"
            onPress={()=>{
              const options = {
                description: 'Credits towards consultation',
                image: 'https://i.imgur.com/3g7nmJC.png',
                currency: 'INR',
                key: 'rzp_test_xZsJjF6GP844W9', // Your api key
                amount: '100',
                name: 'foo',
                external: {
                    wallets: ['paytm']
                  },
                prefill: {
                  email: 'void@razorpay.com',
                  contact: '9191919191',
                  name: 'Razorpay Software'
                },
                theme: {color: '#F37254'}
              }
              console.log(options);
              RazorpayCheckout.open(options)
              .then((data) => {
                 console.log(data);
                // handle success
                // let bodyData = {
                //     razorpay_payment_id: data.razorpay_payment_id,
                //     razorpay_order_id: "order_DslnoIgkIDL8Zt",
                //     razorpay_signature: data.razorpay_signature,
                //   };
                //   dispatch(razorPayment(bodyData));
                //   alert(`Success: ${data.razorpay_payment_id}`);
            
                alert(`Success: ${data.razorpay_payment_id}`);
              }).catch((error) => {
                console.log(error);
                // handle failure
                // alert(`Error: ${error.code} | ${error.description}`);
              });
            }}
            />
        </View>
    );
}

export default Payment;