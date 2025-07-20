import React,{useState,useRef}from "react";
import { InteractionManager } from "react-native";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView ,FlatList,Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons, FontAwesome5,FontAwesome } from "@expo/vector-icons";
import { Stack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
const tabs = [
  { id: "1", label: "Bulk Orders, From  One Source" },
  { id: "2", label: "Certified Quality" },
  { id: "3", label: "Secure Payment" },
  { id: "4", label: "Market Insights" },
  { id: "5", label: "Education" },
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
    const [activeTab, setActiveTab] = useState("1");
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
    const toggleExpand = (index: string) => {
    
    setExpandedItems((prev) => ({
    ...prev,
    [index]: !prev[index], // this is now safe
    }));
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.navBar}>
        <Text style={styles.logo}> Hefgro</Text>
        <Ionicons name="menu" size={38} color="black" />
      </View>

      <ImageBackground
        source={{ uri: "https://t3.ftcdn.net/jpg/00/41/06/42/360_F_41064239_IaGdGyf1vxHFaNDS5K164OFOwiMe1hC9.jpg" }} // Replace with your real background
        resizeMode="cover"
      >
        <View style={styles.overlay}>
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
          <Ionicons name="business" size={24} color="#333" />
          <Text style={styles.industriesText}>Industries sectors</Text>
          <Text style={styles.industriesCount}>20+</Text>
        </View>
        <View style={styles.industriesBox}>
          <AntDesign name="inbox" size={24} color="black" />
          <Text style={styles.industriesText}>raw materials</Text>
          <Text style={styles.industriesCount}>100+</Text>
        </View>
        <View style={styles.industriesBox}>
          <Ionicons name="location" size={24} color="#333" />
          <Text style={styles.industriesText}>Location</Text>
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

        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
          <Ionicons name="chevron-down" size={16} color="white" />
        </TouchableOpacity>
       </View> 
          <View style={styles.induBox}>
            <Avatar icon={ <MaterialCommunityIcons name="tractor" size={24} color="white" />} />
            <Text style={styles.induText}>  Agriculture & Agri tech</Text>
            <Ionicons name="arrow-forward" size={25} color="green" style={{ marginLeft: 50 }} />
          </View>
          <View style={styles.induBox}>
            <Avatar icon={<Ionicons name="restaurant" size={24} color="white" />} />,
            <Text style={styles.induText}>  Food & Beverage</Text>
            <Ionicons name="arrow-forward" size={25} color="green" style={{ marginLeft: 50 }} />
          </View>
          <View style={styles.induBox}>
            <Avatar icon={<MaterialCommunityIcons name="pickaxe" size={24} color="white" />} />,
            <Text style={styles.induText}>  Minning & metals</Text>
            <Ionicons name="arrow-forward" size={25} color="green" style={{ marginLeft: 50 }} />
          </View>
          <View style={styles.induBox}>
            <Avatar icon={<FontAwesome5 name="hard-hat" size={24} color="white" />} />
            <Text style={styles.induText}> Construction & Infrastructure</Text>
            <Ionicons name="arrow-forward" size={25} color="green" style={{ marginLeft: 10 }} />
          </View>
          <View style={styles.induBox}>
            <Avatar icon={<FontAwesome6 name="bolt-lightning" size={24} color="white" />} />
            <Text style={styles.induText}> Energy & power</Text>
            <Ionicons name="arrow-forward" size={25} color="green" style={{ marginLeft: 10 }} />
          </View>
          <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Empowering{"\n"}Essential Raw{"\n"}Material & Products for every Industry
        </Text>
        <Text style={styles.sectionSubtitle}>
          Discover top- quality materials and supplies are designed to fuel your business growth and streamline your operation
        </Text>

        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
          <Ionicons name="chevron-down" size={16} color="white" />
        </TouchableOpacity>
       </View> 
          <View style={styles.induBox}>
            <Avatar icon={ <FontAwesome5 name="seedling" size={24} color="white" />} />
            <Text style={styles.induText}>  grains,spices,edible-oil</Text>
            <Ionicons name="arrow-forward" size={25} color="green" style={{ marginLeft: 50 }} />
          </View>
          <View style={styles.induBox}>
            <Avatar icon={<Ionicons name="restaurant" size={24} color="white" />} />,
            <Text style={styles.induText}>  Food additives</Text>
            <Ionicons name="arrow-forward" size={25} color="green" style={{ marginLeft: 50 }} />
          </View>
          <View style={styles.induBox}>
            <Avatar icon={<MaterialCommunityIcons name="hoop-house" size={24} color="white" />} />
            <Text style={styles.induText}>  animal feeds</Text>
            <Ionicons name="arrow-forward" size={25} color="green" style={{ marginLeft: 50 }} />
          </View>
          <View style={styles.induBox}>
            <Avatar icon={<FontAwesome5 name="shopping-cart" size={24} color="white" />} />
            <Text style={styles.induText}> fertilizers</Text>
            <Ionicons name="arrow-forward" size={25} color="green" style={{ marginLeft: 10 }} />
          </View>
          <View style={styles.induBox}>
            <Avatar icon={<Ionicons name="diamond" size={24} color="white" />} />
            <Text style={styles.induText}> raw minerals & ores</Text>
            <Ionicons name="arrow-forward" size={25} color="green" style={{ marginLeft: 10 }} />
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
       <ImageBackground style={styles.overlay1}
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjv-UlhSdW_x6yDsxDADn3u7YOLyj33USxnQ&s" }} // Replace with your real background
        
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

        <TouchableOpacity style={styles.viewAllButton}>
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
          Even if you do not purchase raw materials from us, you can still
          benefit from our Business Suite through flexible plans.
        </Text>
      </View>
      </View>

      {/* Bottom Button */}
      <View style={styles.con}>
        <TouchableOpacity style={styles.ctaButton1}>
          <Text style={styles.ctaButtonText}>See Pricing</Text>
        </TouchableOpacity>
      </View>
    
    </View>
    
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  navBar: {
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"",
    alignItems: "center",
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  
  overlay: {
    
    padding: 20,
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subheading: {
    color: "white",
    fontSize: 14,
    marginBottom: 20,
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
    backgroundColor: "#f2f2f2",
    margin: 20,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  industriesText: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
  },
  industriesCount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginTop: 5,
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
  viewAllButton: {
    backgroundColor: "#00c851",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
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
    backgroundColor: "#f2f2f2",
    margin: 20,
    borderRadius: 15,
    padding: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  induText: {
    fontSize: 16,
    color: "#555",
    marginTop: 15,
    marginBottom: 12,
  },
  viewAll: {
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 50,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 20,
  },
  viewtext: {
    color: "black",
    fontWeight: "bold",
    marginRight: 6,
  },
  overlay1:{
    margin: 20,
    borderRadius: 15,
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
    color: "#c0392b",
    marginBottom: 10,
  },
  greenTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2ecc71",
    marginBottom: 10,
  },
  desc: {
    color: "#555",
    fontSize: 14,
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
    backgroundColor: "#f5f5f5",
    padding: 16,
    marginBottom: 20,
    borderRadius: 12,
    elevation: 4,
  },
   cardWrapper: {
    backgroundColor: "#2ecc71",
    borderRadius: 20,
    padding: 24,
    margin: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
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
    backgroundColor: "#fff",
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
  }

});
