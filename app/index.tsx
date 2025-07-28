import React,{useState,useRef}from "react";
import { InteractionManager } from "react-native";
import { Dimensions } from "react-native";
import {  TextInput, IconButton } from "@react-native-material/core";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView ,FlatList,Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { FontAwesome6, Ionicons,Entypo } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons, FontAwesome5,FontAwesome,Feather } from "@expo/vector-icons";
import { Stack, Avatar, Flex } from "@react-native-material/core";
import { useFonts } from 'expo-font';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
import { RotateInDownRight } from "react-native-reanimated";
const tabs = [
  { id: "1", label: "Bulk Orders, From  One Source" },
  { id: "2", label: "Certified Quality" },
  { id: "3", label: "Secure Payment" },
  { id: "4", label: "Market Insights" },
  { id: "5", label: "Education" },
];
const headings = [
    { label: "Agriculture & Agri tech", icon: "leaf" },
    { label: "Food & Beverage", icon: "restaurant" },
    { label: "Mining & Metals", icon: "hammer" },
    { label: "Construction", icon: "construct" },
    { label: "Energy & Power", icon: "flash" },
    { label: "Healthcare", icon: "medkit" },
    { label: "Retail", icon: "cart" },
    { label: "Education", icon: "school" },
    { label: "IT & Software", icon: "laptop" },
    { label: "Finance", icon: "wallet" },
];
const cards = [
    {
      id: 1,
      title: "1. Supplier Research",
      redTitle: "❌ Limited reach Limits Growth",
      redDesc:
        "Relaying on local scals channels restricts your growth and revenue potential.Managing multiple platforms wastes time and adds complexity",
      greenTitle: "✅ Access 5000+ verified manufacturers instantly",
      greenDesc:
        "Find verified suppliers across 40+ industries using filters like location, capacity, certifications, and more. HEFGRO makes it fast, safe, and transparent.",
    },
    {
      id: 2,
      title: "2. Effortless RFQ Management",
      redTitle: "❌ Confusing Multiple Quotes",
      redDesc:
        "Delays and confusion from handling many supplier quotes with different prices and terms.",
      greenTitle: "✅ Instant messaging, quotations & reverse auctions",
      greenDesc:
        "Chat with suppliers, get real-time quotations, and use reverse auctions to drive the best pricing—all in one place.",
    },
    {
      id: 3,
      title: "3. Quality Control",
      redTitle: "❌ Quality issues from Umverified Sources",
      redDesc:
        "Production setbacks and losses due to poor-quality or unreliable materials from unverified sources.",
      greenTitle: "✅ 3rd party quality checks + production monitoring",
      greenDesc:
        "We partner with certified quality auditors to inspect production. Live factory tracking ensures what you expect is what you get.",
    },
    {
      id: 4,
      title: "4. Payment Transaction Security",
      redTitle: "❌ Risk of upfront payments to unknown supplier",
      redDesc:
        "Payments upfront to unknown sources can lead to non-delivery and disputes, risking your money and operations.",
      greenTitle: "✅ Escrow payments & dispute resolution",
      greenDesc:
        "HEFGRO holds your funds until order delivery is confirmed. Dispute resolution tools protect both buyers and sellers.",
    },
    {
      id: 5,
      title: "5. Logistics & Delivery Solutions",
      redTitle: "❌ Complex Logistics cause Delays",
      redDesc:
        "Managing transporation,customs,and last-mile delivery is complex and risks costly that disrupt your production.",
      greenTitle: "✅ Track production & shipment in real time",
      greenDesc:
        "Get real-time updates from factory floor to warehouse. Ensure your timelines stay on track, always.",
    },
    {
      id: 6,
      title: "6. Smarts Business suite",
      redTitle: "❌ Disconnect systems slow you Down",
      redDesc:
        "Using seprate tools for inventory,production,and finance slows your business and create costly gaps in real- time tracking.",
      greenTitle: "✅ Get discovered by verified global buyers",
      greenDesc:
        "Join HEFGRO’s global marketplace. Gain exposure and convert more clients without expensive marketing.",
    },
    {
      id: 7,
      title: "7. Sell your Final products",
      redTitle: "❌ Limited reach limits growth",
      redDesc:
        "Many manufacturers want to sell their own branded items but lack tools or buyers.",
      greenTitle: "✅ Sell finished products on HEFGRO B2B platform",
      greenDesc:
        "List your products, reach verified global buyers, and grow direct sales alongside contract manufacturing.",
    },
  ];
export default function HefgroScreen() {
    const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    });
    const [activeTab, setActiveTab] = useState("1");
    const [expanded, setExpanded] = useState(false);
    const set = expanded ? headings : headings.slice(0, 5);
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
    const toggleExpand = (index: string) => {
    
    setExpandedItems((prev) => ({
    ...prev,
    [index]: !prev[index], // this is now safe
    }));
  };
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
          source={require('../assets/images/ship.jpg')} 
          style={styles.backgroundImage1}
        >
        <View style={styles.overlay}>
        <StatusBar style="light" />
      <View style={styles.navBar}>
        <Image
            source={require("../assets/images/Logo.png")}
            style={styles.ima}
            
          />
        <Ionicons name="menu" size={38} color="black" />
      </View>
          <Text style={styles.heading}>Smart RFQs & Fast Delivery for Your Raw Materials</Text>
          <Text style={styles.subheading}>
            Easily Source Raw Materials, Get Production Help, Use Smart Business Tools, and Enjoy Fast Delivery —
            Manage your supply chain and grow your MSME or large business with HEFGRO.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Join Free today</Text>
            <Ionicons name="arrow-forward" size={16} color="white" style={{ marginLeft: 5 }} />
          </TouchableOpacity>
          <View style={{ paddingHorizontal: 20 }}>
          </View>
        </View>
        

        <View style={styles.sliderButtons}>
          <TouchableOpacity style={styles.circleButton}>
            <Ionicons name="chevron-back" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleButton}>
            <Ionicons name="chevron-forward" size={20} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.industriesBox}>
          <Avatar icon={<Ionicons name="business" size={24} color="#FFFFFF" />}color={"#0d01011f"}/>
          <Text style={styles.industriesText}>  Industries sectors</Text>
          <Text style={styles.industriesCount}>20+</Text>
        </View>
        <View style={styles.industriesBox}>
          <Avatar icon={<AntDesign name="inbox" size={24} color="#FFFFFF" />}color={"#5b57571f"}/>
          <Text style={styles.industriesText}>Raw  Material  </Text>
          <Text style={styles.industriesCount}>100+</Text>
        </View>
        <View style={styles.industriesBox}>
          <Avatar icon={<Ionicons name="location" size={24} color="#FFFFFF" />}color={"#5b57571f"}/>
          <Text style={styles.industriesText}>Locations</Text>
          <Text style={styles.industriesCount}>70+</Text>
        </View>
      </ImageBackground>
       <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Empowering{"\n"}Businesses with{"\n"}Smart Sourcing & Operations
        </Text>
        <Text style={styles.sectionSubtitle}>
          We provide high-quality raw materials, optimized procurement, and seamless supply chain
          solutions across multiple industries.
        </Text>
        <View style={styles.container7}>
          <TouchableOpacity
        style={styles.viewAllButton1}
        onPress={() => setExpanded(!expanded)}
      >
        <Text style={styles.viewAllText1}>
          {expanded ? "View Less" : "View All"}
        </Text>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={16}
          color="white"
        />
      </TouchableOpacity>
         <FlatList
        data={expanded ? headings : headings.slice(0, 5)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.induBox1}>
          <Avatar icon={<Ionicons name={item.icon} size={24} color="#22C55E" />} color="#22C55E14"/>
          <Text style={styles.induText}>{item.label}</Text>
          </View>
        )}
      />
      
    </View>
       </View> 
          
          <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Large- Scale{"\n"}Industries,Reliable,safe & cost-Effective sourcing
        </Text>
        <Text style={styles.sectionSubtitle}>
          One vendor.bulk supply.zero risks.smart sourcing for industrial production.
        </Text>

        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>Get started Today</Text>
          <Ionicons name="arrow-forward" size={16} color="white" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewAll}>
          <Text style={styles.viewtext}>contact us</Text>
        </TouchableOpacity>
       </View> 
       <ImageBackground 
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjv-UlhSdW_x6yDsxDADn3u7YOLyj33USxnQ&s" }} // Replace with your real background
        style={{width: 400,height: 400,borderRadius: 50, }}
      >
        <View style={styles.overlay1}>
          <Text style={styles.heading}>Bulk Orders,From One Source</Text>
          <Text style={styles.subheading}>
            Get a single,optimized quote for high-quality raw materials.we deliver bulk materials tailored to your excat specifications,saving you time and reducing cost.
          </Text>
        </View>  
      </ImageBackground> 
      
      <View style={styles.container1}>
      {/* Horizontal Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab.id} onPress={() => setActiveTab(tab.id)} style={styles.tabButton}>
            <Text style={[styles.tabText, activeTab === tab.id && styles.activeTabText]}>
              {tab.label}
            </Text>
            {activeTab === tab.id && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={styles.sectionLabel1}>Why you choose us</Text>
      <Text style={styles.heading1}>Turning pain points into power plays</Text>

      {/* Static Content */}
      <ScrollView contentContainerStyle={styles.container2}>
      {cards.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.redTitle}>{item.redTitle}</Text>
          <Text style={styles.desc}>{item.redDesc}</Text>

      {expandedItems[item.id.toString()] && (
        <View style={{ marginTop: 10 }}>
          <Text style={styles.greenTitle}>{item.greenTitle}</Text>
          <Text style={styles.desc}>{item.greenDesc}</Text>
        </View>
      )}

      <TouchableOpacity
        onPress={() => toggleExpand(item.id.toString())}
        style={styles.expandButton}
      >
        <AntDesign
          name={expandedItems[item.id.toString()] ? "up" : "down"}
          size={24}
          color="white"
        />
      </TouchableOpacity>

        </View>
      ))}
    </ScrollView>
    <View style={styles.cardWrapper}>
      <Text style={styles.headerText}>
        Register Free as a Buyer{"\n"}– Unlock Smart Sourcing, Business Tools &
        Expert Support
      </Text>

      <Text style={styles.bodyText}>
        Join HEFGRO now to get optimized quotes, secure payments, seamless
        sourcing management, plus powerful business tools and expert guidance —
        all designed to simplify your operations and accelerate your growth.
      </Text>

      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaText}>Register Now – It’s Free</Text>
        <Ionicons name="arrow-forward" size={18} color="#111" />
      </TouchableOpacity>
    </View>
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          HEFGRO Smart{"\n"} Business Suite
        </Text>
        <Text style={styles.sectionSubtitle}>
          Going Beyond Raw Material Supply-A Complete smart suite for your Business.
        </Text>

        <TouchableOpacity style={styles.viewAllButton1}>
          <Text style={styles.viewAllText}>Get started with Smart Suite</Text>
          <Ionicons name="arrow-forward" size={16} color="white" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
      <Image
        source={require("../assets/images/mac.png")}  // local image
        style={styles.image}
        resizeMode="contain"
      />
    </View>
    <View style={styles.wrapper}>
      {/* Card 1 */}
      <View style={styles.infoBox}>
        <View style={styles.headerRow}>
          <FontAwesome name="check-circle" size={24} color="#2ecc71" />
          <Text style={styles.headerText1}>
            Unlock Our Business Suite at No Extra Cost
          </Text>
        </View>
        <Text style={styles.bodyText1}>
          Get a Smarter, More Advanced Way to Manage Your Business. Get free
          access upon a successful raw material purchase or supply with us!
        </Text>
      </View>

      {/* Card 2 */}
      <View style={styles.infoBox}>
        <View style={styles.headerRow}>
          <FontAwesome name="check-circle" size={24} color="#2ecc71" />
          <Text style={styles.headerText1}>
            Business Suite Access Without Buying? Yes, You Can
          </Text>
        </View>
        <Text style={styles.bodyText1}>
          Even if you do not purchase raw materials from. us, you can still
          benefit from our Business Suite through flexible plans.
        </Text>
      </View>
  

      {/* Bottom Button */}
      <View style={styles.con}>
        <TouchableOpacity style={styles.ctaButton1}>
          <Text style={styles.ctaButtonText}>See Pricing</Text>
        </TouchableOpacity>
      </View>
    </View>
      <View style={styles.container4}>
        <Image
          source={require("../assets/images/smart.png")}  // local image
          style={styles.image1}
          resizeMode="contain"
        />
        <Text style={styles.title}>Smart Inventory Management</Text>
        <Text style={styles.subtitle}>
          AI-driven Inventory tracking &{"\n"}warehouse optimization.
        </Text>

        <TouchableOpacity style={styles.arrowContainer}>
          <AntDesign name="arrowright" size={28} color="#2ecc71" />
        </TouchableOpacity>
      </View>
      <View style={styles.con}>
        <TouchableOpacity style={styles.ctaButton1}>
          <Text style={styles.ctaButtonText}>See Pricing</Text>
        </TouchableOpacity>
      </View>
    </View>
      <View style={styles.container4}>
        <Image
          source={require("../assets/images/smart.png")}  // local image
          style={styles.image1}
          resizeMode="contain"
        />
        <Text style={styles.title}>Smart Inventory Management</Text>
        <Text style={styles.subtitle}>
          AI-driven Inventory tracking &{"\n"}warehouse optimization.
        </Text>

        <TouchableOpacity style={styles.arrowContainer}>
          <AntDesign name="arrowright" size={28} color="#2ecc71" />
        </TouchableOpacity>
      </View>
      <View style={styles.container4}>
        <Image
          source={require("../assets/images/smart.png")}  // local image
          style={styles.image1}
          resizeMode="contain"
        />
        <Text style={styles.title}>Production Planning & Monitoring</Text>
        <Text style={styles.subtitle}>
          Automate Worflows & track real-time efficiency.
        </Text>

        <TouchableOpacity style={styles.arrowContainer}>
          <AntDesign name="arrowright" size={28} color="#2ecc71" />
        </TouchableOpacity>
      </View>
      <View style={styles.container4}>
        <Image
          source={require("../assets/images/pic1.png")}  // local image
          style={styles.image1}
          resizeMode="contain"
        />
        <Text style={styles.title}>Smart Accounting & Cost Control</Text>
        <Text style={styles.subtitle}>
          Tax Automation ,profit tracking & Expense management.
        </Text>

        <TouchableOpacity style={styles.arrowContainer}>
          <AntDesign name="arrowright" size={28} color="#2ecc71" />
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.container5}>
      <Text style={styles.sectionLabel}>E-commerce</Text>
      <Text style={styles.title2}>Showcase Your Final Products to the World</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle2}>Why use our show case?</Text>
        <Text style={styles.cardText}>
          Find quality finished products from trusted manufacturers worldwide. Whether you're
          shopping for yourself or buying in bulk for your business, our platform helps you get the best
          products at the best prices.
        </Text>

        <TouchableOpacity style={styles.viewAllButton1}>
          <Text style={styles.buttonText1}>List Your Products Now</Text>
          <Feather name="arrow-right" size={18} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.subCard}>
        <View style={styles.iconBox}>
          <Image
            source={require("../assets/images/ico.png")}
            style={{ width: 58, height: 58, borderRadius: 24 }}
          />
        </View>
        <View>
          <Text style={styles.subTitle}>Global Reach</Text>
          <Text style={styles.subText}>
            Your products become visible to buyers worldwide.
          </Text>
        </View>
      </View>
      <View style={styles.subCard}>
        <View style={styles.iconBox}>
          <Image
            source={require("../assets/images/ico.png")}
            style={{ width: 58, height: 58, borderRadius: 24 }}
          />
        </View>
        <View>
          <Text style={styles.subTitle}>Direct Manufacturer Access</Text>
          <Text style={styles.subText}>
            Buyers connect Directly with you,ensuring better prices .
          </Text>
        </View>
      </View>
      <View style={styles.subCard}>
        <View style={styles.iconBox}>
          <Image
            source={require("../assets/images/ico.png")}
            style={{ width: 58, height: 58, borderRadius: 24 }}
          />
        </View>
        <View>
          <Text style={styles.subTitle}>Simple & Effective</Text>
          <Text style={styles.subText}>
            A clean,easy-to-navigate online display that highlights .
          </Text>
        </View>
      </View>
      <View style={styles.subCard}>
        <View style={styles.iconBox}>
          <Image
            source={require("../assets/images/ico.png")}
            style={{ width: 58, height: 58, borderRadius: 24 }}
          />
        </View>
        <View>
          <Text style={styles.subTitle}>Wholesale & Retail Friendly</Text>
          <Text style={styles.subText}>
            Cater to both bulk buyers and retail customers with flexible options.
          </Text>
        </View>
      </View>
      </ScrollView>
      <View style={styles.container6}>
        <View style={styles.shoe}>
          <Image
            source={require("../assets/images/shoe.png")}
            style={{ width: 303, height: 426 }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title3}>
          Shop Direct from{'\n'}
          <Text style={styles.bold}>Manufacturers – Perfect{'\n'}for Retail & Wholesale!</Text>
        </Text>

        <Text style={styles.subtitle3}>
          Find quality finished products from trusted manufacturers worldwide. Whether you’re shopping for yourself or buying in bulk for your business, our platform helps you get the best products at the best prices.
        </Text>

      <TouchableOpacity style={styles.button3}>
        <Text style={styles.buttonText3}>Shop Now</Text>
        <Ionicons name="arrow-forward-outline" size={16} color="#fff" style={{ marginLeft: 6 }} />
      </TouchableOpacity>

      {/* List of Features */}
      <View style={styles.featureBox}>
        <Ionicons name="checkmark-circle" size={24} color="#00cc66" style={styles.icon3} />
        <View style={styles.featureTextBox}>
          <Text style={styles.featureTitle}>Wide Selection Everyone</Text>
          <Text style={styles.featureSubtitle}>
            Shop a variety of products that fit both personal and business needs.
          </Text>
        </View>
      </View>

      <View style={styles.featureBox}>
        <Ionicons name="checkmark-circle" size={24} color="#00cc66" style={styles.icon3} />
        <View style={styles.featureTextBox}>
          <Text style={styles.featureTitle}>Save Money by Buying </Text>
          <Text style={styles.featureSubtitle}>
            No middlemen means better prices and clear costs.
          </Text>
        </View>
      </View>
      <View style={styles.featureBox}>
        <Ionicons name="checkmark-circle" size={24} color="#00cc66" style={styles.icon3} />
        <View style={styles.featureTextBox}>
          <Text style={styles.featureTitle}>Shop AnyTime,Anywhere!</Text>
          <Text style={styles.featureSubtitle}>
            No middlemen means better prices and clear costs.
          </Text>
        </View>
      </View>

      <View style={styles.featureBox}>
        <Ionicons name="checkmark-circle" size={24} color="#00cc66" style={styles.icon3} />
        <View style={styles.featureTextBox}>
          <Text style={styles.featureTitle}>Trusted Suppliers  Rely On</Text>
          <Text style={styles.featureSubtitle}>
            All manufacturers are verified to ensure quality and on-time delivery.
          </Text>
        </View>
      </View>
      </View>
      <View style={styles.cont}>
        <Text style={styles.title4}>
          <Text style={styles.bold}>Business Support  {'\n'}Services</Text>
        </Text>

        <Text style={styles.subtitle4}>
          Find quality finished products from trusted manufacturers worldwide. Whether you’re shopping for yourself or buying in bulk for your business, our platform helps you get the best products at the best prices.
        </Text>


      <View style={styles.full}>
        <View style={styles.featureBox1}>
          <Ionicons name="checkmark-circle" size={24} color="#00cc66" style={styles.icon4} />
          <View style={styles.featureTextBox1}>
            <Text style={styles.featureTitle1}>Work More Efficiently</Text>
            <Text style={styles.featureSubtitle1}>
              Make your production and process Smoother.
            </Text>
          </View>
        </View>

        <View style={styles.featureBox1}>
          <Ionicons name="checkmark-circle" size={24} color="#00cc66" style={styles.icon4} />
          <View style={styles.featureTextBox1}>
            <Text style={styles.featureTitle1}>Grow Sales</Text>
            <Text style={styles.featureSubtitle1}>
              Reach more customers with better marketing.
            </Text>
          </View>
        </View>
        <View style={styles.featureBox1}>
          <Ionicons name="checkmark-circle" size={24}  color="#00cc66" style={styles.icon3} />
          <View style={styles.featureTextBox1}>
            <Text style={styles.featureTitle1}>Save Money</Text>
            <Text style={styles.featureSubtitle1}>
              Cut costs with smart buying and resource use.
            </Text>
          </View>
        </View>

        <View style={styles.featureBox1}>
          {<Ionicons name="checkmark-circle" size={24} color="#00cc66" style={styles.icon4} />}
          <View style={styles.featureTextBox1}>
            <Text style={styles.featureTitle1}>Know your competition</Text>
            <Text style={styles.featureSubtitle1}>
              Say ahead with udefull market competitor reach.
            </Text>
          </View>
          </View>
        </View>
        <View style={styles.imagebox}>
          <Image
          source={require("../assets/images/export.png")}  // local image
          style={styles.image1}
          resizeMode="contain"
        />
        </View>
    </View>
    <View style={styles.ship}>
      <View style={styles.imageview}>
        <Image
          source={require("../assets/images/cont.jpg")}  // local image
          style={styles.image2}
          resizeMode="contain"
        />
      
      <View style={styles.imgtext}>
        <View style={styles.pic_cont}>
        <Text style={styles.pictext}>
          Becomming a Supplying Partner- Grow Your Raw Material Sales with HEFGROW</Text>
      </View>
      </View>
      <View style={styles.ic_cont}>
        <Image
          source={require("../assets/images/ic.png")}  // local image
          style={styles.image3}
          resizeMode="contain"
        />
        
        <Text style={styles.icotext}>Join our network of verified suppliers and get free access to smart tools,expert Support
          secure payments.
        </Text>
        
     
      </View>
       <View style={styles.ic_cont}>
        <Image
          source={require("../assets/images/ic.png")}  // local image
          style={styles.image3}
          resizeMode="contain"
        />
        
        <Text style={styles.icotext}>Join our network of ,expert Support
          secure payments,and customized contracts that protect your business.
        </Text>
        
     
      </View>
      <View style={styles.blue_cont}>
        <Text style={styles.blue_text}>
          Start selling globally-It's free
        </Text>
      </View>
      </View>
    </View>
    <View style={styles.cot}>
      {/* Title */}
      <Text style={styles.head}>Accelerate Your{"\n"}Business with HEFGRO</Text>

      {/* Subtitle */}
      <Text style={styles.subhead}>
        More Than Just Raw Material Supply — Expert Solutions to Boost Your Production and Drive Business Growth
      </Text>

      {/* Card */}
      <View style={styles.ico_desc}>
        <Ionicons name="globe-outline" size={78} color="#22C55E" style={styles.icon5} />

        <Text style={styles.cardhead}>Global Reach</Text>
        <Text style={styles.cardDesc}>
          Get raw materials from trusted suppliers worldwide
        </Text>
      </View>
      <View style={styles.ico_desc}>
        <Octicons name="container" size={78} color="#22C55E" style={styles.icon5} />

        <Text style={styles.cardhead}>No Orders Minimums</Text>
        <Text style={styles.cardDesc}>
          Buy excatly what you need.
        </Text>
      </View>
      <View style={styles.ico_desc}>
        <MaterialIcons name="lock-outline" size={80} color="#22C55E" style={styles.icon5} />
        <Text style={styles.cardhead}>Cost & Time Saving Procurement</Text>
        <Text style={styles.cardDesc}>
          Get materials faster and cheaper
        </Text>
      </View>
      <View style={styles.ico_desc}>
        <Ionicons name="time-outline" size={78} color="#22C55E"  style={styles.icon5} />

        <Text style={styles.cardhead}>All in One Platform</Text>
        <Text style={styles.cardDesc}>
          Manage everything easily.
        </Text>
      </View>
      <View style={styles.ico_desc}>
        <MaterialCommunityIcons name="checkbox-multiple-marked-outline" size={78} color="#22C55E" style={styles.icon5} />

        <Text style={styles.cardhead}>Smart Tech</Text>
        <Text style={styles.cardDesc}>
          AI-power quotes and tools.
        </Text>
      </View>
      <View style={styles.ico_desc}>
        <FontAwesome5 name="mixcloud" size={78} color="#22C55E"  style={styles.icon5} />

        <Text style={styles.cardhead}>Global Reach</Text>
        <Text style={styles.cardDesc}>
          Get raw materials from trusted suppliers worldwide
        </Text>
      </View>
    </View>
     <ScrollView contentContainerStyle={styles.quotes_cont}>
      <Text style={styles.quotes_head}>What Our Clients{"\n"}Say?</Text>
      <Text style={styles.quotes_sub}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      
      <View style={styles.quotes_card}>
        <MaterialCommunityIcons name="format-quote-open" size={108} color="#8CE4B1" style={styles.quoteIcon} />
        <Text style={styles.testimonial}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <View style={styles.profile}>
          <Image
            source={require('../assets/images/person.jpg')} // Replace with your local image path
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Yun</Text>
            <Text style={styles.role}>Manufacturing CEO</Text>
          </View>
        </View>
      </View>
      <View style={styles.pagination}>
        <Avatar icon={<Entypo name="chevron-left" size={20} color="white" />}color={"#D1D5DB"}size={40} />
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
       <Avatar icon={ <Entypo name="chevron-right" size={20} color="white" />}color={"#22C55E"}size={40}/>
      </View>
    </ScrollView>
     <View style={styles.green_cont}>
      {/* Heading */}
      <Text style={styles.green_head}>
        Manage Your Business{"\n"}Anywhere with Our{"\n"}Mobile App
      </Text>

      {/* Feature Boxes */}
      <View style={styles.shadowBox}>
        <Text style={styles.featureText}>
          Real-Time Inventory &{"\n"}Procurement Tracking
        </Text>
        <View style={styles.circle}><Text style={styles.circleText}>01</Text></View>
      </View>

      <View style={styles.shadowBox1}>
        <Text style={styles.featureText}>
          Automated Sales, Invoices & Payments
        </Text>
        <View style={styles.circleActive}><Text style={styles.circleText}>02</Text></View>
      </View>

      <View style={styles.shadowBox2}>
        <Text style={styles.featureText}>
          Live Business Insights & Performance Monitoring
        </Text>
        <View style={styles.circle}><Text style={styles.circleText}>03</Text></View>
      </View>
      <Image
        source={require('../assets/images/phone.png')}
        style={styles.phone}
        resizeMode="contain"
      />
    </View>
    <View style={styles.img_cont}>
      <View style={styles.header}>
        <Text style={styles.img_title}>Get Started with{"\n"}HEFGRO Today!</Text>
        <Text style={styles.img_sub}>Transform Your Business, Scale Faster &{"\n"}Stay Ahead</Text>
      </View>
      <ImageBackground
        source={require('../assets/images/img1.jpg')} 
        style={styles.imageBackground}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.overlayText}>Stay Ahead with{"\n"}Business Trends &{"\n"}Strategies</Text>
          <TouchableOpacity style={styles.img_button}>
            <Text style={styles.button_Text}>Start Procuement ↗</Text>
            <View style={styles.buttonUnderline} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('../assets/images/img2.png')} // replace with your actual image path
        style={styles.imageBackground}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.overlayText}>Stay Ahead with{"\n"}Business Trends &{"\n"}Strategies</Text>
          <TouchableOpacity style={styles.img_button}>
            <Text style={styles.button_Text}>Talk to  Expert ↗</Text>
            <View style={styles.buttonUnderline} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('../assets/images/img3.png')} 
        style={styles.imageBackground}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.overlayText}>Stay Ahead with{"\n"}Business Trends &{"\n"}Strategies</Text>
          <TouchableOpacity style={styles.img_button}>
            <Text style={styles.button_Text}>Start Free Trial ↗ </Text>
            <View style={styles.buttonUnderline} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    <View style={styles.blog_cont}>
      <Text style={styles.headerTitle}>Blogs and news</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <TouchableOpacity style={styles.blog_button}>
        <Text style={styles.blog_buttonText}>Read All Blogs →</Text>
      </TouchableOpacity>
      <View style={styles.blog_card}>
        <Image
          source={require('../assets/images/blog.jpg')} 
          style={styles.blogImage}
        />

        <View style={styles.blogMeta}>
          <Text style={styles.tag}>Ecommerce</Text>
          <Text style={styles.date}>27 March 2025</Text>
        </View>

        <Text style={styles.blogTitle}>Stay Ahead with Business Trends & Strategies</Text>
        <Text style={styles.blogDesc}>
          Stay informed with the latest business trends, strategies, and insights to keep your company competitive...
        </Text>
      </View>
      <View style={styles.blog_card}>
        <Image
          source={require('../assets/images/blog.jpg')} 
          style={styles.blogImage}
        />

        <View style={styles.blogMeta}>
          <Text style={styles.tag}>Ecommerce</Text>
          <Text style={styles.date}>27 March 2025</Text>
        </View>

        <Text style={styles.blogTitle}>Stay Ahead with Business Trends & Strategies</Text>
        <Text style={styles.blogDesc}>
          Stay informed with the latest business trends, strategies, and insights to keep your company competitive...
        </Text>
      </View>
      <View style={styles.blog_card}>
        <Image
          source={require('../assets/images/blog.jpg')} 
          style={styles.blogImage}
        />

        <View style={styles.blogMeta}>
          <Text style={styles.tag}>Ecommerce</Text>
          <Text style={styles.date}>27 March 2025</Text>
        </View>

        <Text style={styles.blogTitle}>Stay Ahead with Business Trends & Strategies</Text>
        <Text style={styles.blogDesc}>
          Stay informed with the latest business trends, strategies, and insights to keep your company competitive...
        </Text>
      </View>
    </View>
        <Image
          source={require('../assets/images/hefgro.png')} 
          style={styles.hefgro_image}
        />
    <View style={styles.form_cont}>
   {/*<Stack spacing={4} style={{ marginBottom: 500 }}>
      <Text style ={{width:298,height:54,fontSize:18,fontFamily:"Poppins",textAlign:"center",marginLeft:20,marginTop:50}}>
        Fill out the Form Below,And our Team Will Connect with you
      </Text>
    <Text style={{  fontSize: 14, fontWeight: '500',marginLeft:20,marginTop:20,fontFamily:"Poppins", }}>
        Full Name
      </Text>
      
    <TextInput variant="outlined" 
    
     
     placeholder="name" style={{ width:298 ,height:12,borderWidth:0  ,borderRadius:200,borderColor:"#E5E7EB"}} />
      
  </Stack>
  */}
  <View style={styles.form_container}>
      <Text style={styles.form_title}>
        Fill out the form below, and our team will connect with you.
      </Text>
      <Text style={styles.label}>Full Name</Text>
      <View style={styles.box}><Text style={styles.placeholder}>Your name</Text></View>
      <Text style={styles.label}>Company Name</Text>
      <View style={styles.box}><Text style={styles.placeholder}>Company name</Text></View>
      <Text style={styles.label}>Mobile Number</Text>
      <View style={styles.phoneRow}>
        <Text style={styles.flag}>🇮🇳</Text>
        <Text style={styles.codeText}>+91  </Text>
        <View style={[styles.box, { flex: 1, marginLeft: 10 }]}>
          <Text style={styles.placeholder}>8023456789</Text>
        </View>
      </View>
      <View style={styles.checkboxRow}>
        <View style={styles.tick}></View>
        <Ionicons name="logo-whatsapp" size={18} color="green" />
        <Text style={{ marginLeft: 5, flex: 1 ,fontFamily:"Poppins",fontSize:12}}>
          Given number is your WhatsApp number
        </Text>
        
      </View>
      <Text style={styles.label}>Select your country</Text>
      <View style={styles.box}><Text style={styles.placeholder}>Your country</Text></View>

     
      <Text style={styles.label}>Your Message</Text>
      <View style={[styles.box, { height: 100 }]}>
        <Text style={styles.placeholder}>Your message</Text>
      </View>
    </View>
     <Text style={styles.form_heading}>Select Partnership</Text>
      <View style={styles.row}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Investor</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Finance</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Logistics</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Technology</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Supplier</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Legal</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.option}>
          <Text style={styles.optionText}>General</Text>
        </View>
      </View>

      {/* Checkbox Section */}
      <View style={styles.checkboxRow}>
        <View style={styles.checkbox} />
        <Text style={styles.checkbox_Text}>
          I agree to receive updates and{"\n"}communications from HEFGRO.
        </Text>
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
        <Ionicons name="arrow-forward" size={16} color="#fff" style={{ marginLeft: 5 }} />
      </TouchableOpacity>
  </View>
  <View style={styles.sign_cont}>
    <View style={styles.green}>
      <Text style={styles.green_heading}>Sign up to our news letter</Text>
      <Text style={styles.green_text}>Stay upto date with latest news and announcement</Text>
      <View style={styles.mail_cont}>
        <Text style={styles.mail}>Enter your email address</Text>
      </View>
      <View style={styles.subscribe_cont}>
        <Text style={styles.subscribe}> Subscribe 
      <Ionicons name="arrow-forward" size={16} color="#141F29"  style={{ marginLeft: 65 }} /></Text>
    </View>
     <Image
          source={require('../assets/images/Vector.png')} 
          style={styles.vectorImage}
        />
  </View>
  </View>
  <View style={styles.last_cont}>
    <Image
          source={require('../assets/images/Logo.png')} 
          style={styles.facebook}
        />
    <View style={styles.last_text}>
      <Text style={styles.letter}>Smarter business,smarter growth</Text>
      <View style={styles.last_icon}>
        <Image
          source={require('../assets/images/apps.png')} 
          style={styles.vector_Image}
        />
       {/*} <AntDesign name="twitter" size={24} color="black" />
        <AntDesign name="linkedin-square" size={24} color="black" />
        <AntDesign name="facebook-square" size={24} color="black" />
        <AntDesign name="instagram" size={24} color="black" />
        <AntDesign name="youtube" size={24} color="black" />
             {*/}
      </View>
      <View style={styles.lastmail}>
        <AntDesign name="mail" size={24} color="#22C55E" />
        <Text style ={styles.mail_text}>support@hefgro.com</Text>
      </View>
      <View style={styles.lastmail}>
        <FontAwesome5 name="phone-alt" size={24} color="#22C55E" />
        <Text style ={styles.mail_text}>+91 - 4568323466</Text>
      </View>
      <View style={styles.lastmail}>
        <MaterialIcons name="location-on" size={24} color="#22C55E" />
        <Text style ={styles.mail_text}>Global headquarters- India</Text>
      </View>
    </View>    
  </View>
</ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    width:375,
    height:23748,
    paddingBottom:20,
    flex: 1,
   
  },
  navBar: {
    width:343,
    height:67.28,
    borderRadius:350,
    paddingHorizontal: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"#FFFFFF",
    alignItems: "center",
    paddingLeft:24,
    paddingRight:24,
    paddingTop:16,
    paddingBottom:16,
    borderColor:"#141F292E",
    bottom:1,
  },
 
  backgroundImage1: {
    width: 375,
    height: 1070, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  ima:{
    paddingHorizontal: 55,
    width: 10,
    height: 35,
    gap: 215.9,
    opacity: 1,

  },
  
  overlay: {
    
    padding: 20,
  },
  heading: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Medium",  
    fontSize: 32,
    lineHeight: 40.96,              
    marginBottom:20,
  },
  subheading: {
    fontFamily: "Poppins",      
    color:"#F9FAFB",
    fontSize: 16,
    fontWeight: "400",                  
    lineHeight: 23.68,                  
    letterSpacing: -0.32, 
  },
  button: {
    backgroundColor: "#00c851",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  sliderButtons: {
    
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  circleButton: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 30,
    marginHorizontal: 10,
    elevation: 3,
  },
  
  industriesBox: {
  backgroundColor: "#6c696966", 
  width: 253,
  height: 140,
  margin: 20,
  borderRadius: 15,
  padding: 20,
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#FFFFFF1F",
  shadowColor: "#f9f1f11f",
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 10,
  overlayColor:"red",

  },
  industriesText: {
    fontSize: 16,
    fontWeight:400,
    color: "#F9FAFB",
    fontFamily:"Poppins"
  },
  industriesCount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    
  },
  textBlock: {
    padding: 20,
    marginBottom: 40,
  },
  bottomText: {
    fontSize: 20,
    color: "#001f4d",
    textAlign: "left",
  },
   section: {
    padding: 20,
  },
  sectionTitle: {
    textAlign:"center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A237E",
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
   container7: {
    padding: 20,
  },
  induBox1: {
    width:343,
    height:72,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 16,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  buttonText1: {
    color: 'white',
    marginRight: 6,
    fontWeight: 'bold',
  },
  viewAllButton1: {
    backgroundColor: "#00c851",
    flexDirection: "row",
    marginLeft:50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 20,
  },
  viewAllText: {
    color: "white",
    fontWeight: "bold",
    marginRight: 6,
  },
  induBox: {
    backgroundColor: "#FFFFFF",
    height:56,
    width:353,
    margin: 10,
    borderRadius: 16,
    paddingTop: 12,
    paddingBottom:12,
    paddingRight:16,
    paddingLeft:16,
    gap:8,
    flexDirection: "row",
  },
  induText: {
   
    fontSize: 16,
    color: "#555",
    fontFamily:"Poppins",
    fontWeight:500,
    marginLeft:10,
  },
  viewAll: {
     width: 189.16, // or just 189 if you want to round
    height: 48,
    marginLeft:70,
    paddingTop: 12,
    paddingRight: 20,
    paddingBottom: 12,
    paddingLeft: 20,
    gap: 12,              // only works on flex containers in RN 0.71+
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor:"#FFFFFF",
  },
  viewtext: {
    
    color: "black",
    fontWeight: "bold",
    marginRight: 6,

  },
  overlay1:{
    margin: 20,
    borderRadius: 300,
    padding: 20,
    alignItems: "center",
  }, 
  container1: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },
  tabContainer: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  tabButton: {
    marginRight: 20,
    alignItems: "center",
  },
  tabText: {
    fontSize: 14,
    color: "#888",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#000",
    fontWeight: "bold",
  },
  underline: {
    height: 3,
    backgroundColor: "green",
    width: "100%",
    marginTop: 4,
    borderRadius: 10,
  },
   container2: {
    margin: 20,
    backgroundColor: "#F9FAFB",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    
  },
  redTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#141F29",
    marginBottom: 20,
    fontFamily:"Poppins",
  },
  greenTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#141F29",
    marginBottom: 10,
  },
  desc: {

    color: "#555",
    fontSize: 14,
    fontFamily:"Poppins",
  },
  expandButton: {
    marginTop: 20,
    alignSelf: "flex-end",
    backgroundColor: "#2ecc71",
    padding: 10,
    borderRadius: 20,
  },
  sectionLabel1: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    marginBottom: 6,
    marginTop:50,
  },
  heading1: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center",
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  card: {
    backgroundColor:"#F9FAFB",
    padding: 16,
    width:303,
    marginBottom:18,
  
  },
   cardWrapper: {
    backgroundColor: "#2ecc71",
    borderRadius: 20,
    padding: 24,
    margin: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
    fontFamily:"Poppins"
  },
  bodyText: {
    fontSize: 14,
    color: "#f5f5f5",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  ctaButton: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  ctaText: {
    color: "#111",
    fontWeight: "600",
    fontSize: 14,
  },
  container3: {
    padding: 30,
    
  },
  image: {
    width: 300,
    height: 300,
  },
  wrapper: {
    padding: 20,
    backgroundColor: "#F9FAFB",
    flex: 1,
  },
  infoBox: {
    borderWidth: 1,
    borderColor: "#2ecc71",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 10,
  },
  headerText1: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    color: "#000",
  },
  bodyText1: {
    fontSize: 14,
    color: "#555",
  },
  ctaButton1: {
     backgroundColor: "#1E3A8A",
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 10,
  alignItems: "center",
  alignSelf: "center",
  marginTop: 1,
  },
  ctaButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  con:{
     paddingHorizontal: 8,
    paddingVertical: 8,
  },
   container4: {
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    padding: 20,
    flexGrow: 1,
  },
  image1: {
    width: "100%",
    height: 400,
    borderRadius: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },
  arrowContainer: {
    marginTop: 10,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 50,
    marginLeft:200
    
  },
  container5: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  sectionLabel: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 10,
    fontFamily:"Poppis"
  },
  title2: {
  color:"#1E3A8A",  
  fontFamily: "Poppins-Medium",      
  fontWeight: "500",                 
  fontSize: 32,
  lineHeight: 32 * 1.28,             
  letterSpacing: -0.64,              
  textAlign: "center",
  },
  card1: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  cardTitle2: {
    width:303,
    height:40,
    fontSize: 24,
    fontWeight: "500",
    color: "#141F29",
    marginBottom: 10,
    textAlign:"center",
    fontFamily:"Poppins-Medium",
    letterSpacing: -0.2,

  },
  cardText: {
    fontSize: 12,
    letterSpacing:0,
    lineHeight: 16,
    color: "#6B7280",
    marginBottom: 20,
    fontFamily:"Poppins",
    textAlign:"center",
  },
  viewAllButton1: {
    backgroundColor: "#2ecc71",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom:40,
  },
  viewAllText1: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginRight: 6,
    fontFamily:"Semibold",
  },
  icon6: {
    marginTop: 1,
  },
  subCard: {
    backgroundColor: "#FFFFFF",
    alignItems: "flex-start",
    paddingTop: 28,
    paddingBottom:28,
    paddingLeft:20,
    paddingRight:20,
    gap:19,
    borderRadius: 20,
    width:303,
    height:214,
    marginBottom:15,
    marginTop:15,
    elevation: 5,
  },
  iconBox: {
    width: 32,
    height: 32,
    
  },
  iconEmoji: {
    fontSize: 22,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    height:54,
    color: "#111",
    marginTop: 10,
    marginBottom: 4,
    padding:2,
    fontFamily:"Poppins",
    
  },
  subText: {
    fontSize: 14,
    color: "#555",
    fontFamily: 'Poppins', 
  },
  container6:{
    marginTop:50,
    marginLeft:25,
    marginRight:50,
    width:335,
    height:1320,
    borderRadius:20,
    gap:8,
    backgroundColor:"#FFFFFF",

  },
  shoe:{
    
    marginLeft: 90,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",      
    width: 140,                     
    height: 140,
    backgroundColor: "#eee",
    marginTop:200,
    
      
  },
  title3: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: '#111',
    marginTop:150,
    
    fontFamily:"Poppins",

  },
  bold: {
    fontWeight: '400',
     marginBottom: 10,
  },
  subtitle3: {
    textAlign: 'center',
    fontSize: 12,
    color: '#555',
    marginBottom: 20,
    lineHeight: 20,
    fontFamily:"Poppins",
  },
  button3: {
    backgroundColor: '#1E3A8A',
    flexDirection: 'row',
    alignSelf: 'center',
    width:131,
    height:48,
    
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText3: {
    paddingLeft:10,
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  featureBox: {
    flexDirection: 'row',
    marginBottom: 5,
    borderStyle:"dashed",
    borderColor:"#141F2914",
    width:303,
    height:88,
    marginLeft:1,
    borderBottomWidth: 1,
    
  },
  icon3: {
    
    marginLeft: 15,
    marginTop: 14,
  },
  featureTextBox: {
    flex: 1,
  },
  featureTitle: {
    marginLeft:10,
    fontSize: 16,
    fontWeight: '400',
    color: '#111',
    
    width:247,
    fontFamily:"Poppins",
  },
  cont:{
    width:375,
    height:1100,
    backgroundColor:"#FFFFFF",
    marginTop:48,
    marginBottom:48,
  },
  featurebox1:{
  },
  featureSubtitle: {
    width:247,
    height:40,
    marginLeft:10,
    marginBottom:5,
    marginTop:3,
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
    fontFamily:"Poppins",
  },
  full:{
    marginLeft:10,
    width: 335,
    height: 444,
    transform: [{ rotate: '0deg' }], 
    opacity: 1,
    paddingTop: 24,
    paddingBottom: 24,
    
    gap: 16, 
    borderRadius: 20,
    backgroundColor:"#F9FAFB",
  },
  title4: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: '#1E3A8A',
    marginTop:150,
    marginBottom: 10,
    fontFamily:"Poppins",

  },
  bold1: {
    fontWeight: '400',
     marginBottom: 10,
  },
  subtitle4: {
    textAlign: 'center',
    fontSize: 12,
    color: '#555',
    marginBottom: 20,
    lineHeight: 20,
    fontFamily:"Poppins",
  },
  button4: {
    backgroundColor: '#1E3A8A',
    flexDirection: 'row',
    alignSelf: 'center',
    width:131,
    height:48,
    
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText4: {
    paddingLeft:10,
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  featureBox1: {
    flexDirection: 'row',
    marginBottom: 5,
    borderStyle:"dashed",
    borderColor:"#141F2914",
    width:345,
    height:87,
    marginLeft:1,
    borderBottomWidth: 1,
    gap:20,
    
  },
  icon4: {
    
    marginLeft: 15,
    marginTop: 14,
  },
  featureTextBox1: {
    flex: 1,
  },
  featureTitle1: {
    marginLeft:10,
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginBottom: 4,
    width:247,
    fontFamily:"Poppins",
  },
  
  featureSubtitle1: {
    width:247,
    height:40,
    marginLeft:10,
    marginTop:3,
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
    fontFamily:"Poppins",
  },
  imagebox:{
    width:375,
    height:264,
    gap:32,
    color:"#FFFFFF",
  },
  ship:{
    width:375,
    height:860,
  },
  imageview:{
    width:343,
    height:764,
    marginTop:100,
    marginBottom:20,
    borderRadius:20,
    marginLeft:20,
    backgroundColor:"#1E3A8A",
  },
  image2:{
    width:303,
    height:240,
    borderRadius:50,
    marginLeft:20,
  },
  imgtext:{
    width:303,
    height:200,
    gap:40,
  },
  pic_cont:{
    width:303,
    
  },
  pictext:{
    width:303,
    height:150,
    lineHeight:32,
    textAlign:"center",
    marginLeft:25,
    fontSize: 24,
    color: '#FFFFFF',
    letterSpacing:-2,
    fontFamily:"Poppins",
  },
  ic_cont:{
    width:303,
    height:100,
    gap:5,
    marginLeft:15,
    flexDirection:"row",
  },
  blue_cont:{
    width:282,
    height:48,
    backgroundColor:"#FFFFFF",
    borderRadius:20,
    marginLeft:25,
    marginTop:25,
  },
  blue_text:{
    fontFamily:"Poppins-SemiBold",
    textAlign:"center",
    fontSize:14,
    color:"#141F29",
    marginTop:10,

  },
  image3:{
    height:24,
    width:24,
    
   
  },
  icotext:{
    width:267,
    marginLeft:15,
    height:150,
    fontFamily:"Poppins",
    color:"#F9FAFB",
    fontSize:14,
    fontWeight:400,
  },
  bor:{
    height:120,
    width:303,
    
  },
  cot: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
    alignItems: 'center',
  },
  head: {
    fontSize: 24,
    fontWeight: '500',
    color: '#1E3A8A',
    textAlign: 'center',
    marginTop: 40,
    fontFamily:"Poppins",

  },
  subhead: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginVertical: 16,
    paddingHorizontal: 10,
    lineHeight: 20,
    fontFamily:"Poppins",
  },
  ico_desc: {
    backgroundColor: 'white',
    width: 303,
    height:286,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4, // for Android
    marginTop: 30,
  },
  icon5: {
    marginBottom: 12,
    
  },
  cardhead: {
    fontSize: 20,
    height:54,
    width:255,
    fontWeight: '500',
    color: '#141F29',
    marginBottom: 2,
    fontFamily:"Poppins-SemiBold",
    marginTop:35,
  },
  cardDesc: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily:"Poppins",
  },
  quotes_cont: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#F9FAFB',
  },
  quotes_head: {
    fontSize: 32,
    fontWeight: '500',
    color: '#1E3A8A',
    textAlign: 'center',
    fontFamily:"Poppins-SemiBold"
  },
  quotes_sub: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 24,
    paddingHorizontal: 24,
    lineHeight: 20,
    fontFamily:"Poppins",
  },
  quotes_card: {
    backgroundColor: 'white',
    width: 335,
    height:416,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#FFFFFF',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  quoteIcon: {
    marginBottom: 12,
  },
  testimonial: {
    marginTop:50,
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 20,
    fontFamily:"Poppins",
  },
  profile: {
    marginTop:50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  role: {
    fontSize: 18,
    color: '#6B7280',
    fontFamily:"Poppins-SemiBold",
    
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    gap: 20,
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#141F2966',
  },
  green_cont: {
    backgroundColor: '#22C55E', 
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 60,
    borderRadius: 20,
    marginLeft:10,
    width:380,
    height:702,
  },
  green_head: {
    fontSize: 24,
    fontFamily:"Poppins",
    fontWeight: 500,
    color: '#FFFFFF',
    textAlign: 'center',
   
  },
  shadowBox: {
    backgroundColor: '#ffffff30',
    borderTopRightRadius: 99,
    borderBottomRightRadius: 99,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:6,
    width:300,
    height:52,
  },
  shadowBox1: {
    width:267,
    height:52,
    backgroundColor: '#ffffff30',
    borderTopLeftRadius: 99,
    borderBottomLeftRadius: 99,
    paddingTop: 6,
    paddingBottom:6,
    paddingLeft:16,
    paddingRight:16,
    marginRight:100,
    marginBottom:20,
    marginTop:20,
    flexDirection: 'row',
    gap:12,
    left:88,
    justifyContent: 'space-between',
    
  },
  shadowBox2: {
    backgroundColor: '#ffffff30',
    borderTopRightRadius: 99,
    borderBottomRightRadius: 99,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:6,
    width:320,
    height:52,
  },
  highlighted: {
    backgroundColor: '#ffffff50',
  },
  featureText: {
    color: '#FFFFFF',
    width:244,
    height:56,
    fontSize: 12,
    fontFamily:"Poppins",
    
    flex: 1,
    
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  circleActive: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  circleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#141F29',
  },
  circleTextActive: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#141F29',
  },
  phone: {
    
    width: 1000,
    height: 340,
    
  },
  img_cont: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width:375,
    height:1101,
    marginTop:50,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  img_title: {
    fontSize: 26,
    fontWeight: '500',
    color: '#1D2B53',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily:"Poppins-SemiBold",
  },
  img_sub: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    fontFamily:"Poppins",
  },
  imageBackground: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:1,
  },
  
  overlayContent: {
    backgroundColor: 'rgba(34, 29, 29, 0.2)',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    
  },
  overlayText: {
    width:216,
    height:90,
    fontSize: 24,
    fontWeight: 500,
    letterSpacing:-2,
    lineHeight:25,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 100,
    fontFamily:"Poppins",
  },
  img_button: {
    alignItems: 'center',
  },
  button_Text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    fontFamily:"Poppins",
  },
  buttonUnderline: {
    height: 3,
    backgroundColor: '#00D084', 
    marginTop: 3,
    width:150,
    marginRight:20,
  },
   blog_cont: {
    padding: 24,
    backgroundColor: '#f9fbfc',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1a2a63',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6e6e6e',
    marginBottom: 20,
  },
  blog_button: {
    backgroundColor: '#22c55e',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignSelf: 'center',
    marginBottom: 30,
  },
  blog_buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  blog_card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginBottom:30,
    width:359,
    height:420,
  },
  blogImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 12,
  },
  blogMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginTop:25,
  },
  tag: {
    backgroundColor: '#E5E7EB',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    fontFamily:"Poppins",
    fontWeight:500,
    fontSize: 12,
    color: '#141F29',
  },
  date: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily:"Poppins",
  },
  blogTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 6,
    color: '#141414',
    fontFamily:"Poppins",
  },
  blogDesc: {
    fontSize: 13,
    color: '#7a7a7a',
    fontFamily:"Poppins",
  },
  
  hefgro_image:{
    width:335,
    height:476,
    borderRadius:20,
    marginTop:28,
    marginBottom:28,
    marginLeft:22,
  },
  form_cont:{
    width:334,
    height:1000,
    backgroundColor:"#FFFFFF",
    marginLeft:20,
    marginRight:20,
  },
  form_container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  form_title: {
    fontWeight: '500',
    fontSize: 18,
    fontFamily:"Poppins",
    marginBottom: 20,
    color:"#141F29",
  },
  label: {
    fontWeight: '500',
    marginTop: 15,
    marginBottom: 5,
    color:"#141F29",
    fontFamily:"Poppins",
  },
  box: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    height:42,
    width:298,
    
  },
  placeholder: {
    color: '#6B7280',
    fontFamily:"Poppins",
  },
  tick:{
    width:15,
    height:15,
    borderWidth:0.75,
    borderColor:"#6B7280",
    marginRight:10,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 20,
  },
  codeText: {
    marginLeft: 8,
    fontSize: 14,
    color:"#6B7280",
    fontFamily:"Poppins",
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
   form_heading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    fontFamily:"Poppins"
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 10,
  },
  option: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  optionText: {
    fontSize: 12,
    color: '#141F29',
    fontFamily:"Poppins",
  },
  checkbox_Row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    marginLeft:30,
    
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#6B7280',
    marginTop: 3,
    marginRight: 10,
  },
  checkbox_Text: {
    flex: 1,
    fontSize: 12,
    color: '#141F29',
    fontFamily:"Poppins",
  },
  submitButton: {
    flexDirection: 'row',
    backgroundColor: '#22C55E',
    borderRadius: 30,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width:310,
    height:48,
    marginTop:20,
    marginLeft:20,
  },
  submitText: {
    fontSize: 14,
    fontWeight: 600,
    color: '#FFFFFF',
    fontFamily:"Poppins",
  },
  sign_cont:{
    marginTop:40,
    width:375,
    height:604,
    backgroundColor:"#FFFFFF",
    paddingTop:48,
    paddingBottom:48,
    gap:40,
  },
  green:{
    height:508,
    width:335,
    borderRadius:20,
    backgroundColor:"#22C55E",
    marginLeft:15,
  },
  green_heading:{
    width:295,
    height:92,
    color:"#FFFFFF",
    fontFamily:"Poppins",
    fontSize:32,
    fontWeight:500,
    textAlign:"center",
    marginTop:30,
    marginLeft:20,
    marginBottom:20,
  },
  green_text:{
    width:295,
    height:50,
    fontSize:14,
    fontFamily:"Poppins",
    color:"#F9FAFB",
    marginTop:20,
    marginLeft:20,
    textAlign:"center",
  },
  mail_cont:{
    width:295,
    height:56,
    backgroundColor:"#FFFFFF29",
    marginLeft:30,
    marginTop:15,
  },
  mail:{
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    color:"#F9FAFB",
    fontFamily:"Poppins",
    fontSize:14,
    fontWeight:400,
    marginTop:15,
    marginLeft:20,
  },
  subscribe_cont:{
    width:295,
    height:45,
    backgroundColor:"#FFFFFF",
    borderRadius:12,
    marginTop:15,
    marginLeft:35,
  },
  subscribe:{
    fontFamily:"Poppins",
    color:"#141F29",
    textAlign:"center",
    marginTop:10,
  },
  vectorImage:{
    width:231,
    height:169,
    left:84,
    top:40,
    rotation:13.8,
  },
  last_cont:{
    width:334,
    height:861,
  },
  last_text:{
    width:295,
    height:24,
    marginTop:20,
    marginLeft:30,
  },
  letter:{
  },
  facebook:{
    width:120,
    height:42,
    marginLeft:30,
    marginTop:50,
  },
  last_icon:{
  },
  vector_Image:{
    width:248,
    height:40,
    marginTop:20,
  },
  lastmail:{
    width:300,
    height:24,
    flexDirection:"row",
    marginTop:20,
  },
  mail_text:{
    fontFamily:"Poppins",
    marginLeft:10,
    color:"#141F29",
    fontSize:14,
  }
 
  
});

