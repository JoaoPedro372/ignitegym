import { useState } from "react";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { Center, Heading, HStack, VStack, Text } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { ExerciseCard } from "@components/ExerciseCard";


export function Home(){
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral', 
    'Levantamento terra',
  ])
  const [groups, setGroups] = useState(['Costas', 'Biceps', 'Tríceps', 'Ombro'])
  const [groupSelected, setGroupSelected] = useState('Costas')
  return(
   <VStack flex={1}>
    <HomeHeader />

    <FlatList 
      data={groups} 
      keyExtractor={item => item} 
      renderItem={({item}) => (
        <Group 
          name={item}
          isActive={groupSelected.toLocaleLowerCase() === item.toLocaleLowerCase() }
          onPress={() => setGroupSelected(item)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 32}}
      style={{marginVertical: 40, maxHeight: 44, minHeight: 44}}
    />

    <VStack px="$8" flex={1}>
      <HStack justifyContent="space-between" mb="$5" alignItems="center">
        <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
          Exercícios
        </Heading>
        <Text color="$gray200" fontSize="$sm" fontFamily="$body">{exercises.length}</Text>
      </HStack>

      <FlatList 
        data={exercises} 
        keyExtractor={item => item} 
        renderItem={() => <ExerciseCard />} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      />

      
    </VStack>
   </VStack>
  )
}