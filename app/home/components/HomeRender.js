import React, { Component } from 'react'

import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonsIcons from 'react-native-vector-icons/Octicons';



const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const emailData = [
    {
        sender: "APOLLO MUNICH CAREER",
        subject: "APOLLO MUNICH - CAREERNEXT PROGRAM",
        content: "Dear Mohammed Haris, We are inviting you to APOLLO MUNICH - CAREERNEXT PROGRAM",
        date: "8 Aug"
    },
    {
        sender: "Techgig Top RatedTechgig Top RatedTechgig Top Rated",
        subject: "Practice latest Oracle First Round Questions For Entry Level Software Developer - Get Hired Now",
        content: "Techgig Learning Institution India's Biggest Programming Platform",
        date: "2:28 PM",
        attachement: "yes"
    },
    {
        sender: "Coursera",
        subject: "Welcome to Mutiplatform Mobile App Development with Web Technologies: Ionic and Cordova",
        content: "Mohammed Haris, welcome to Mutiplatform Mobile App Development with Web Technologies: Ionic and Cordova",
        date: "20:35 PM",
        attachment: "yes"
    },
    {
        sender: "Techgig Top Rated",
        subject: "Practice latest Oracle First Round Questions For Entry Level Software Developer - Get Hired Now",
        content: "Techgig Learning Institution India's Biggest Programming Platform",
        date: "30 Sep"
    },
    {
        sender: "Coursera",
        subject: "Welcome to Mutiplatform Mobile App Development with Web Technologies: Ionic and Cordova",
        content: "Mohammed Haris, welcome to Mutiplatform Mobile App Development with Web Technologies: Ionic and Cordova",
        date: "29 Jul"
    },
    {
        sender: "APOLLO MUNICH CAREER",
        subject: "APOLLO MUNICH - CAREERNEXT PROGRAM",
        content: "Dear Mohammed Haris, We are inviting you to APOLLO MUNICH - CAREERNEXT PROGRAM",
        date: "8 Aug"
    },
    {
        sender: "Techgig Top RatedTechgig Top RatedTechgig Top Rated",
        subject: "Practice latest Oracle First Round Questions For Entry Level Software Developer - Get Hired Now",
        content: "Techgig Learning Institution India's Biggest Programming Platform",
        date: "2:28 PM",
        attachement: "yes"
    },
    {
        sender: "Coursera",
        subject: "Welcome to Mutiplatform Mobile App Development with Web Technologies: Ionic and Cordova",
        content: "Mohammed Haris, welcome to Mutiplatform Mobile App Development with Web Technologies: Ionic and Cordova",
        date: "20:35 PM",
        attachment: "yes"
    },
    {
        sender: "Techgig Top Rated",
        subject: "Practice latest Oracle First Round Questions For Entry Level Software Developer - Get Hired Now",
        content: "Techgig Learning Institution India's Biggest Programming Platform",
        date: "30 Sep"
    },
    {
        sender: "Coursera",
        subject: "Welcome to Mutiplatform Mobile App Development with Web Technologies: Ionic and Cordova",
        content: "Mohammed Haris, welcome to Mutiplatform Mobile App Development with Web Technologies: Ionic and Cordova",
        date: "29 Jul"
    }
]



export default class HomeRender extends React.Component {
    constructor(props) {
        super(props)
        this.getRandomColor = this.getRandomColor.bind(this)
    }
    getRandomColor() {
        return "#" + Math.floor(Math.random() * 50 + 50) + "" + Math.floor(Math.random() * 50 + 50) + Math.floor(Math.random() * 50 + 50)
    }
    render() {
        debugger
        return (
            <View>
                <View style={{ width: deviceWidth, height: deviceHeight / 10, backgroundColor: '#DB4437' }}>
                    {/* <Image style={{width:deviceWidth, height:deviceHeight}} source={require('./gmail.png')} />  */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 0.20, alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="menu" size={deviceWidth / 15} color="#FFFFFF" style={{ marginRight: deviceWidth / 25 }} />
                        </View>
                        <View style={{ flex: 0.65, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: deviceWidth / 18, color: 'white' }}>Primary</Text>
                        </View>
                        <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIcons name='search' size={deviceWidth / 15} color="#FFFFFF" style={{ marginLeft: deviceWidth / 50 }} />
                        </View>
                    </View>
                </View>


                <View >
                    <ScrollView>

                        <View style={{ height: deviceHeight / 10, borderBottomColor: '#e0e0e0', borderBottomWidth: deviceHeight / 1000, paddingRight: deviceWidth / 25 }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 0.20, alignItems: 'center', justifyContent: 'center' }}>
                                    <Ionicons name="md-people" size={deviceWidth / 15} color="#4986e7" />
                                </View>
                                <View style={{ flex: 0.55, justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: deviceWidth / 23, color: 'black', }}>Social</Text>
                                    <Text style={{ fontSize: deviceWidth / 25, color: 'grey' }} numberOfLines={1}>Facebook, Quora Digest, LinkedIn</Text>
                                </View>
                                <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <Text style={{ backgroundColor: "#4986e7", color: 'white', paddingVertical: deviceHeight / 500, paddingHorizontal: deviceWidth / 50, marginRight: deviceWidth / 150 }}>1 new</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{ height: deviceHeight / 10, borderBottomColor: '#e0e0e0', borderBottomWidth: deviceHeight / 1000, paddingRight: deviceWidth / 25 }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 0.20, alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesome name="tag" size={deviceWidth / 15} color="#16a765" />
                                </View>
                                <View style={{ flex: 0.55, justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: deviceWidth / 23, color: 'black', }}>Promotions</Text>
                                    <Text style={{ fontSize: deviceWidth / 25, color: 'grey' }} numberOfLines={1}>Freelancer.com, SmartDraw Software</Text>
                                </View>
                                <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <Text style={{ backgroundColor: "#16a765", color: 'white', paddingVertical: deviceHeight / 500, paddingHorizontal: deviceWidth / 50, marginRight: deviceWidth / 150 }}>99+ new</Text>
                                </View>
                            </View>
                        </View>


                        {
                            emailData.map((eachMail, index) => {
                                return (
                                    <View key={index} style={{ height: deviceHeight / 6, borderBottomColor: '#e0e0e0', borderBottomWidth: deviceHeight / 1000, paddingRight: deviceWidth / 25 }}>
                                        <View style={{ flex: 1, flexDirection: 'row', }}>
                                            <View style={{ flex: 0.20, alignItems: 'center', justifyContent: 'center' }}>
                                                {/* <FontAwesome name="circle" size={deviceWidth / 8} color="#16a765" /> */}
                                                <View style={{ width: deviceWidth / 8.5, height: deviceWidth / 8.5, backgroundColor: (this.getRandomColor()), borderRadius: deviceWidth, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ color: 'white', fontSize: deviceWidth / 15, fontWeight: 'normal', fontFamily: 'verdana' }}>{eachMail.sender.charAt(0)}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flex: 0.80, justifyContent: 'center' }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                                                    <Text style={{ width: deviceWidth / 2, fontWeight: 'bold', fontSize: deviceWidth / 22, color: '#222222', }} numberOfLines={1}>{eachMail.sender}</Text>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                                        <Text style={{ paddingTop: 19 }}> </Text>
                                                        <Text style={{ fontWeight: 'bold', fontSize: deviceWidth / 30, color: "#4285f4", }}>{eachMail.date}</Text>
                                                    </View>
                                                </View>
                                                <Text style={{ fontSize: deviceWidth / 25, color: '#808080' }} numberOfLines={1}>{eachMail.subject}</Text>
                                                <Text style={{ fontSize: deviceWidth / 25, color: '#808080' }} numberOfLines={1}>{eachMail.content}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}
