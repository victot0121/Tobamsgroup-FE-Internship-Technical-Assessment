import React from 'react'
import Header from '@/components/Header/Header';
import SecondPageSectionOne from  "@/components/SecondPageSectionOne/SecondPageSectionOne"
import Deliciousness from '@/components/Deliciousness/Deliciousness';
import Recipetoo from "@/components/Recipetoo/Recipetoo"
import Footer from '@/components/Footer/Footer';

const RecipeDetails = () => {
  return (
    <div>
        <Header />
        <SecondPageSectionOne/>
        <Deliciousness/>
        <Recipetoo/>
        <Footer/>
    </div>
  )
}

export default RecipeDetails