import { Text, View, Pressable, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {

  const events = [
    {
      id: 1,
      image: require("../assets/images/1.jpg"),
    },
    {
      id: 2,
      image: require("../assets/images/2.jpg"),
    },
    {
      id: 3,
      image: require("../assets/images/3.jpg"),
    },
    {
      id: 4,
      image: require("../assets/images/4.jpg"),
    },
    {
      id: 5,
      image: require("../assets/images/5.jpg"),
    },
    {
      id: 6,
      image: require("../assets/images/6.jpg"),
    },
  ];

    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-yellow-950">
            <View className="h-3/5 w-full">
              <ScrollView horizontal>
                {
                  events.map((event) => (
                    <View key={event.id} className="h-full w-96 p-5">
                      <Image source={event.image} className="h-full w-full rounded-3xl" />
                    </View>
                  ))
                }
              </ScrollView>
            </View>
            <View className="flex-1 justify-center gap-4 p-4">
                <Text className="text-center text-2xl font-bold text-white/60">Welcome to</Text>
                <Text className="text-center text-5xl font-bold text-white">hDarioDev Invites</Text>
                <Text className="text-center text-lg font-bold text-white/60 mb-5">
                    Create beautiful invitations for your events. Anyone can receive invitations. Share them with the world.
                </Text>
                <Pressable className="items-center self-center rounded-full bg-white px-10 py-4">
                    <Text className="text-lg">Create an Event</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
