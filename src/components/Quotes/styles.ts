
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        width: "100%",
        marginTop: 32,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16,
        color: '#fff',
    },
    link: {
        fontFamily: 'Inter_300Light',
        fontSize: 14,
        color: '#93c5fd',
    },
    quotes: {
        marginTop: 32,
        width: '100%',

    },
    singleQuotes: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        borderRadius: 20,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    localImg: {
        width: 60,
        height: 60,
        borderRadius: 60
    },
    quoteDescription: {},
    quoteName: {
        fontFamily: 'Inter_700SemiBold',
        fontSize: 16,
        color: '#fff',
    },
    quoteSlug: {
        fontFamily: 'Inter_300Light',
        fontSize: 16,
        color: '#ccc',
    },

    quoteValues: {},
    quoteNow: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16,
        color: '#fff',
    },
    quotePercent: {},
})