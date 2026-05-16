"use client"

import DestinationCard from "./DestinationCard";
import { motion } from 'framer-motion'
const DestinationMotion = ({data}) => {
    return (
        <>
            {
                    data.map((destination,index) => <motion.div key={destination._id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.03 }}
                    >

                        <DestinationCard destination={destination}></DestinationCard>
                    </motion.div>
                    )
                }
        </>
    );
};

export default DestinationMotion;