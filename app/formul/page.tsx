"use client"



import { motion } from "framer-motion"
import { Input } from '@/components/ui/input'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useReducer, useState,useEffect,useRef } from 'react'

const page = () => {
    const [profit,setProfit]=useState({
        buyingPriceProfit:0,
        buyingPriceLoss:0,
        profitFactor:1,
        lossFactor:1,
        // totalProfit:0,
        // totalLoss:0
    })
    const [totals,setTotals]=useState({
        totalProfit:0,
        totalLoss:0
    })


        // const totalLoss=((((1.001-(0.01*lossFactor))/0.999)*loss))
        // const totalProfit=(((1.001+(0.01*profitFactor))/0.999)*profit)
    const HandleChange=(e)=>{
        setProfit((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

    }
    useEffect(() => {
        const totalLoss=((((1.001-(0.01*profit.lossFactor))/0.999)*profit.buyingPriceLoss))
        const totalProfit=(((1.001+(0.01*profit.profitFactor))/0.999)*profit.buyingPriceProfit)
        setTotals((prevState) => ({ ...prevState, ["totalProfit"]: totalProfit,["totalLoss"]: totalLoss }));
      }, [profit]);


    return (
        <motion.section initial={{ opacity: 0 }} animate={{
            opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
        }}
            className='py-6'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    {/* form */}
                    <div className='xl:w-[54%] order-2 xl:order-none'>
                        <form action="" className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                            <h3 className='text-4xl text-accent'>Let's work together</h3>
                            <p>I am excited to see this change</p>
                            {/*input  */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <p>Profit</p>
                                <p>Loss</p>
                                <Input type='buyingPriceProfit' placeholder='Buying Price Profit' onChange={HandleChange} name="buyingPriceProfit" tabIndex={1} autoComplete="off" />
                                <Input type='buyingPriceLoss' placeholder='Buying Price Loss' onChange={HandleChange} name="buyingPriceLoss" tabIndex={3} autoComplete="off" />
                                <Input type='profitFactor' placeholder='Fraction Factor Profit'onChange={HandleChange} name="profitFactor"tabIndex={2} autoComplete="off"  />
                                <Input type='lossFactor' placeholder='Fraction Factor Loss' onChange={HandleChange} name="lossFactor" tabIndex={4} autoComplete="off" />
                                {/* <Input type='email' placeholder='Email address' /> */}
                                <div>
                                    <Card className='bg-primary'>
                                        <CardHeader>
                                            <CardTitle className='text-accent'>Profit</CardTitle>
                                            <CardDescription className='text-accent'>Profit For 1.01%</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className='text-accent'>{totals.totalProfit}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                {/* <Input type='phone' placeholder='Phone Number' /> */}
                                <div>
                                    <Card className='bg-primary'>
                                        <CardHeader>
                                            <CardTitle className='text-[#e93737]'>Loss</CardTitle>
                                            <CardDescription className='text-[#e93737]'>Loss For 1.01%</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className='text-[#e93737] font-bold'>{totals.totalLoss}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                            {/* select */}
                            {/* <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value='est'>Web Development</SelectItem>
                      <SelectItem value='cst'>UI/UX design</SelectItem>
                      <SelectItem value='mst'>Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* TextArea */}
                            {/* <Textarea
                  className='h-[200px]'
                  placeholder='type your message here'
                /> */}
                            {/* Btn */}
                            {/* <Button size="md" className='max-w-40' type='button' onClick={calcProfit}>Profit</Button>  */}
                        </form>
                    </div >
                    {/* info */}
                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-9'>
                        <ul className='flex flex-col gap-10'>
                            {/* {info.map((item, index) => {
                  return (
                    <li key={index} className='flex items-center gap-6'>
                      <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                        <div className='text-[28px]'>{item.icon}</div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-white/60'> {item.title}</p>
                        <h3 className='text-xl'>{item.description}</h3>
                      </div>
                    </li>
                  )
                })} */
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default page