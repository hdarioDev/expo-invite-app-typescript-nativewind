import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-yellow-950">
            <View className="h-3/5 w-full bg-gray-400"></View>
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
