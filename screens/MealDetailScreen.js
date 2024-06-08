import { Image, Text, View, StyleSheet, ScrollView } from "react-native"

import { MEALS } from '../data/dummy_data'
import Informacion from "../components/Informacion"

function MealDetailScree({route, navigation}) {
    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    return(
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <Informacion 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
            />
            <View>
                <Text style={styles.subtitle}>Información</Text>
                {selectedMeal.grupos.map(grupos => <Text style={styles.textContent} key={grupos}>{grupos}</Text>)}
                <Text style={styles.subtitle}></Text>
                {selectedMeal.steps.map(step => <Text style={styles.textContent} key={step}>{step}</Text>)}
            </View>
        </ScrollView>
    )

}

export default MealDetailScree

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