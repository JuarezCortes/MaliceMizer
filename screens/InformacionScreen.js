import { Image, Text, View, StyleSheet, ScrollView } from "react-native"

import { MUSIC } from '../data/DatosMalice'
import Informacion from "../components/Informacion"

function InformacionScree({route, navigation}) {
    const musicId = route.params.musicId

    const selectedMusic = MUSIC.find((music) => music.id === musicId)

    return(
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedMusic.imageUrl }} />
            <Text style={styles.title}>{selectedMusic.title}</Text>
            <Informacion 
                duration={selectedMusic.duration}
                complexity={selectedMusic.complexity}
                affordability={selectedMusic.affordability}
            />
            <View>
                <Text style={styles.subtitle}>Detalles</Text>
                {selectedMusic.grupos.map(grupos => <Text style={styles.textContent} key={grupos}>{grupos}</Text>)}
                <Text style={styles.subtitle}> </Text>
                {selectedMusic.steps.map(step => <Text style={styles.textContent} key={step}>{step}</Text>)}
            </View>
        </ScrollView>
    )

}

export default InformacionScree

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 330
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 8,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 4,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    textContent: {
        fontSize: 12,
        margin: 4,
        marginVertical: 3,
        marginHorizontal: 24
    }


})