import { Text, View, Pressable, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import Animated, { FadeIn, FadeInUp, FadeOut, SlideInUp } from 'react-native-reanimated';

const TIME_DURATION = 1000;

export default function Welcome() {

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

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
        <View className="flex-1 items-center justify-center bg-yellow-950">
            <Animated.Image
              key={ events[0].id }
              source={ events[0].image }
              className="absolute w-full h-full"
              resizeMode="cover"
              entering={ FadeIn.duration(TIME_DURATION) }
              exiting={ FadeOut.duration(TIME_DURATION) }
            />
            <View className="absolute w-full h-full bg-black/50" />
            <BlurView intensity={ 80 }>
              <SafeAreaView edges={['bottom']}>
                <Animated.View className="h-3/5 w-full mt-20" entering={SlideInUp.duration(TIME_DURATION)}>
                  <ScrollView horizontal>
                    {
                      events.map((event) => (
                        <View key={ event.id } className="h-full w-96 p-5 shadow-lg">
                          <Image source={ event.image } className="h-full w-full rounded-3xl" />
                        </View>
                      ))
                    }
                  </ScrollView>
                </Animated.View>
                <View className="flex-1 justify-center gap-4 p-4">
                    <Animated.Text
                      className="text-center text-2xl font-bold text-white/60"
                      entering={FadeInUp.duration(TIME_DURATION)}
                    >
                      Welcome to
                        </Animated.Text>
                    <Animated.Text
                      className="text-center text-5xl font-bold text-white"
                      entering={FadeIn.delay(TIME_DURATION)}
                    >
                      hDarioDev Invites
                    </Animated.Text>
                    <Animated.Text
                      className="text-center text-lg font-bold text-white/60 mb-5"
                      entering={FadeInUp.duration(TIME_DURATION)}
                    >
                        Create beautiful invitations for your events. Anyone can receive invitations. Share them with the world.
                    </Animated.Text>
                    <AnimatedPressable
                      className="items-center self-center rounded-full bg-white px-10 py-4"
                      entering={FadeInUp.duration(TIME_DURATION)}
                    >
                        <Text className="text-lg">Create an Event</Text>
                    </AnimatedPressable>
                </View>
              </SafeAreaView>
            </BlurView>
        </View>
    )
}
