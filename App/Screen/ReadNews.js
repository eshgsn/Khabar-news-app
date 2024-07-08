import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Image, ScrollView, Share, Text, TouchableOpacity, View } from 'react-native'
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';


function ReadNews() {
    const news=useRoute().params.news;
    const navigation = useNavigation();
    useEffect(()=>{
        console.log(news)
    },[])

    const shareNews=()=>{
      Share.share({
        message:news.title+"\nRead More"+news.description
      })
    }

  return (
    <ScrollView style={{backgroundColor:Color.white,flex:1}}>
        <View style={{marginBottom:10,marginTop:10,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
           <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>shareNews()}>
            <Ionicons name="share-outline" size={28} color="black" />
          </TouchableOpacity>


        </View>
        <Image source={{uri:news.urlToImage}}
        style={{width:'100%',height:300,borderRadius:15}} />
        <Text style={{marginTop:10,fontSize:22,fontWeight:'bold'}}>{news.title}</Text>
        <Text style={{marginTop:10,color:Color.primary,fontSize:16}}>{news.source.name}</Text>
        <Text style={{marginTop:10,fontSize:18,color:Color.gray, lineHeight:30}}>{news.description}</Text>
        <TouchableOpacity 
        onPress={()=>WebBrowser.openBrowserAsync(news.url)}>
        <Text style={{marginTop:10,color:Color.primary,fontSize:16}}>Read More</Text>
        </TouchableOpacity>
       
    </ScrollView>
  )
}

export default ReadNews