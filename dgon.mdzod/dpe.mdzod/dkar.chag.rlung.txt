Виконай реформатування класичного індексу тибетських текстів скопійованого в буфер обміну з сайту BDRC згідно наступних правил:

1) Файл повинен бути ASCII, UTF-8 дозволяється лише для кирілічних перекладів, інше повинно транслітеруватися wylie.

2) Заголовок повинен бути оформлений згідно класичного двохрівневого формату: автор, клас текстів, в даному випадку dkar chag.

Приклад:

```
@#/_/se ra mkha' 'gro kun bzang/ dkar chag/ Збірка праць Сера Кхандро Кунзанг
```

3) BDRC архівна система містить наступні класифікатори для змістів: [col] колекція, [vol] том, [sec] секція, [cha] глава, [txt] текст, [toc] змісти або карчаки.

4) Тома [vol] і колекції [col] повинні нумеруватися "XX) ", 2-значними цифровими префіксами з нулями, всередині колекцій нова нумерація томів.

Приклад:

```
01) pod dang po [vol] Перший том
```

4) Секції не повинні нумеруватися.

Приклад:

```
gsol 'debs yid bzhin nor bu sogs tshan pa bcu bzhi [sec] Молитви коштовності бажань та інші: чотирнадцять розділів
```

4) Тексти [txt], глави [cha] і змісти [toc] повинні нумеруватися 3-значиними цифровими префіксами з нулями і пробілом "XXX ".
Нумерація текстів наскрізна.

Приклад:

004 rtsom pa po'i ngo sprod mdor bsdus [cha] Коротке представлення автора
005 dbus bza' mkha' 'gro'i gsung 'bum pod dang po'i dkar chag [toc] Зміст першого тому збірки промов дакіні їжі
006 dbus mo bde ba'i rdo rje'i rnam thar [txt] Життєпис Деви Ваджри

5) Збережи це все в текстовий файл для UNIX з іменем dkar.chag.txt. Зважай на пусті рядки між елементами карчака.

Повний приклад:

```
@#/_/se ra mkha' 'gro kun bzang/ dkar chag/ Збірка праць Кунзанґ Де Кьонґ Ванмо

01) pod dang po [vol] Перший том

001 lha mo 'od zer can ma'i snang brnyan [cha] Образ богині променів світла
002 dbus bza' mkha' 'gro kun bzang bde skyong dbang mo'i snang brnyan [cha] Образ дакіні їжі Кунзанґ Де Кьонґ Ванмо
003 dbus bza' mkha' 'gro'i gsung 'bum gyi sngon 'gro'i gtam [cha] Вступне слово до збірки промов дакіні їжі
004 rtsom pa po'i ngo sprod mdor bsdus [cha] Коротке представлення автора
005 dbus bza' mkha' 'gro'i gsung 'bum pod dang po'i dkar chag [toc] Зміст першого тому збірки промов дакіні їжі
006 dbus mo bde ba'i rdo rje'i rnam thar [txt] Життєпис Деви Ваджри

gsol 'debs yid bzhin nor bu sogs tshan pa bcu bzhi [sec] Молитви коштовності бажань та інші: чотирнадцять розділів

271 gsol 'debs yid bzhin nor bu [txt] Молитва коштовності бажань
272 gsol 'debs ka nas dag pa ma [txt] Молитва чистоти від початку
273 dge btsun tshe 'phel gyis bskul ngor bris pa [txt] Написано на прохання Ґе Цун Цхе Пхел
274 sngags btsun dam pa'i ngor bris pa [txt] Написано на прохання СнЦун Дам Па
```

