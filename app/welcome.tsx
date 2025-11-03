import { Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-yellow-950">
            <View className="h-[60%] w-full bg-gray-400"></View>
            <View className="flex-1 justify-center gap-4 bg-yellow-800 p-4">
                <Text className="text-center text-2xl font-bold text-white/60">Welcome to</Text>
                <Text className="text-center text-5xl font-bold text-white">Invites</Text>
                <Text className="text-center text-lg font-bold text-white/60">
                    Create beautiful invitations for your events. Anyone can receive invitations. Share them with the world.
                </Text>
            </View>
        </SafeAreaView>
    )
}
