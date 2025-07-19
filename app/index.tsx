import React,{useState,useRef}from "react";
import { InteractionManager } from "react-native";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView ,FlatList} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Stack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
export default function HefgroScreen() {
    const [activeTab, setActiveTab] = useState("bulk");
    const scrollRef = useRef(null);
    const tabs = [
  { key: "bulk", label: "Bulk Orders,\n From One Source" },
  { key: "certified", label: "Certified Quality" },
  { key: "secured", label: "Secured Payments" },
  { key: "delivery", label: "On Time Delivery" },
  { key: "insights", label: "Free Market Insights" },
];
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
          Empowering{"\n"}Large- Scale{"\n"}Industries,Reliable,safe & cost-Effective sourcing
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
      

      {/* Main Content */}
      {/* Tab Navigation */}
      {/* Tab Selector UI */}
<View style={styles.tabContainer}>
  {tabs.map(({ key, label }) => (
    <TouchableOpacity
  key={key}
  onPress={() => {
  setActiveTab(key);
  const index = tabs.findIndex((t) => t.key === key);

  InteractionManager.runAfterInteractions(() => {
    if (scrollRef.current && scrollRef.current.scrollToIndex) {
      scrollRef.current.scrollToIndex({ index, animated: true });
    } else {
      console.warn("FlatList not yet mounted");
    }
  });
}}
>
  <Text style={styles.tabText}>{label}</Text>
</TouchableOpacity>

  ))}
</View>

{/* Horizontal Tab Scroller */}
<FlatList
  ref={scrollRef}
  data={tabs}
  keyExtractor={(item) => item.key}
  horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  getItemLayout={(data, index) => ({
    length: Dimensions.get("window").width,
    offset: Dimensions.get("window").width * index,
    index,
  })}
  onMomentumScrollEnd={(e) => {
    const index = Math.round(
      e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
    );
    setActiveTab(tabs[index].key);
  }}
  renderItem={({ item }) => (
    <ScrollView
      nestedScrollEnabled
      style={{ width: Dimensions.get("window").width }}
    >
      {/* ...existing content... */}
    </ScrollView>
  )}
/>


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
  }, tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  tabText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#555",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "green",
    paddingBottom: 5,
    color: "#000",
  },
  subtitle: {
    textAlign: "center",
    color: "#888",
    fontSize: 14,
    marginTop: 10,
  },
  mainTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#1a237e",
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 16,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
  cross: {
    fontSize: 22,
    color: "red",
    marginRight: 8,
  },
  check: {
    fontSize: 22,
    color: "green",
    marginRight: 8,
  },
  textBlock: {
    flex: 1,
  },
  issueTitle: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 4,
  },
  description: {
    color: "#555",
    fontSize: 14,
  },
  solution: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1a237e",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 15,
  },
  pageContent: {
    marginTop: 10,
    marginBottom: 30,
  },
  page: {
  width: Dimensions.get("window").width,
  padding: 20,
},


});
