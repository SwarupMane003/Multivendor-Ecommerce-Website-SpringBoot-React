import React, { useState } from 'react'
import HomeCategory from './HomeCategory/HomeCategory'
import TopBrand from './TopBrands/Grid'
import ElectronicCategory from './Electronic Category/ElectronicCategory'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Backdrop, Button, CircularProgress } from '@mui/material'
import ChatBot from '../ChatBot/ChatBot'
import { useNavigate } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useAppSelector } from '../../../Redux Toolkit/Store'
import DealSlider from './Deals/Deals'



const Home = () => {
    const [showChatBot, setShowChatBot] = useState(false)
    const { homePage } = useAppSelector(store => store)
    const navigate = useNavigate();

    const handleShowChatBot = () => {
        setShowChatBot(!showChatBot)
    }
    const handleCloseChatBot = () => {
        setShowChatBot(false)
    }
    const becomeSellerClick = () => {
        navigate("/become-seller")
    }
    return (
        <>
        {(!homePage.loading)?<div className='space-y-5 lg:space-y-10 relative'>
            {homePage.homePageData?.electricCategories && <ElectronicCategory />}
            {/* <Banner /> */}


          {homePage.homePageData?.grid &&  <section >
                {/* <h1 className='text-lg lg:text-4xl font-bold text-[#00927c] pb-5 lg:pb-20 text-center'>SHOP FOR WEDDING</h1> */}
                <TopBrand />
            </section>}
        {homePage.homePageData?.deals &&    <section className='pt-10'>
            <h1 className='text-center text-lg lg:text-4xl font-black brand-gradient-text pb-5 lg:pb-10'>Today's Deals</h1>
                <DealSlider/>
            </section>}
           {homePage.homePageData?.shopByCategories && <section className='flex flex-col justify-center items-center py-20 px-5 lg:px-20'>
                <h1 className='text-lg lg:text-4xl font-black brand-gradient-text pb-5 lg:pb-20'>Shop by Category</h1>
                <HomeCategory />
            </section>}
            <section className='brand-section'>
              <div className='brand-section-inner brand-dark-band rounded-lg overflow-hidden grid lg:grid-cols-[0.9fr_1.1fr] min-h-[280px]'>
                <div className='p-8 md:p-12 flex flex-col justify-center'>
                    <p className='brand-kicker text-pink-200'>Seller marketplace</p>
                    <h1 className='text-3xl md:text-5xl font-black mt-3'>
                        Sell Your Products
                    </h1>
                    <p className='text-lg md:text-2xl text-pink-100 mt-3'>With <strong className='logo text-3xl md:text-5xl pl-2 text-white'>ShopSphere</strong></p>

                    <div className='pt-6 flex'>
                        <Button
                            onClick={becomeSellerClick}
                            startIcon={<StorefrontIcon />}
                            variant="contained"
                            className='brand-button'
                        >
                            Become Seller
                        </Button>
                    </div>

                </div>
                <img className='w-full h-full min-h-[240px] object-cover' src={"/seller_banner_image.jpg"} alt="Seller preparing products" />

              </div>
            </section>

            <section className='fixed bottom-10 right-10'>
                {showChatBot ? <ChatBot handleClose={handleCloseChatBot} /> : <Button onClick={handleShowChatBot} sx={{ borderRadius: "2rem" }} variant='contained' className='h-16 w-16  flex justify-center items-center rounded-full'>
                    <ChatBubbleIcon sx={{ color: "white", fontSize: "2rem" }} />
                </Button>}




            </section>
    


        </div>: <Backdrop
                open={true}

            >
                <CircularProgress color="inherit" />
            </Backdrop>}
       
        </>
        
    )
}

export default Home
