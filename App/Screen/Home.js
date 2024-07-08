import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

function Home() {

  const[newsList,setNewsList]= useState([])
  const[loading,setLoading]= useState(true)


    useEffect(()=>{
        // getTopHeadLine('latest');
        getNewsByCategory('latest');
    },[])

    const getNewsByCategory=async(category)=>{
      const result=(await GlobalApi.getByCategory(category)).data;
      console.log(result)
      setNewsList(result.articles)
    }

    const getTopHeadLine=async()=>{
        const result=(await GlobalApi.getTopHeadLine).data;
        setNewsList(result.articles);
    }
  return (
    <ScrollView 
    style={{backgroundColor:Color.white}}>
      
        <View style={{display:'flex',flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'}}>
        <Text style={styles.appName}>khabar</Text>
        <Ionicons name="notifications-outline" size={25} color="black" />
        </View>

        {/* Category List */}
        <CategoryTextSlider selectCategory={(category)=>getNewsByCategory(category)}/>

        {/* {loading?<ActivityIndicator size={'large'} color={Color.primary} />: */}
      <View>

        {/* Top Headline Slider */}
        <TopHeadlineSlider newsList={newsList}/>

        {/* headline List */}
        <HeadlineList newsList={newsList}/>
        </View>
    {/* } */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    appName:{
        fontSize:25,
        fontWeight:'bold',
        color:Color.primary
    }

})

export default Home