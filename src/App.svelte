<script>
    import 'bulma/css/bulma.css'
    import AutoComplete from "simple-svelte-autocomplete"
    import Select from 'svelte-select';
    import CopyClipBoard from './CopyClipboard.svelte';
    import {Button} from 'svelma'

    const units = [
        {value: "metric", label: "Metric", multiplier: 1, unit: "km", unit_label: "name_km"},
        {value: "imperial", label: "Imperial", multiplier: 1.60934, unit: "miles", unit_label: "name_miles"},
    ]
    export let duration;
    const conversions = [
        {id: 1, name_miles: "Aerobics, low intensity", name_km: "Aerobics, low intensity", miles: 0.64, km: 1.02},
        {id: 2, name_miles: "Aerobics, high intensity", name_km: "Aerobics, high intensity", miles: 0.91, km: 1.46},
        {id: 3, name_miles: "Aerobics, step", name_km: "Aerobics, step", miles: 0.77, km: 1.23},
        {id: 4, name_miles: "Badminton", name_km: "Badminton", miles: 0.66, km: 1.05},
        {id: 5, name_miles: "Ballet dancing", name_km: "Ballet dancing", miles: 0.6, km: 0.97},
        {id: 6, name_miles: "Baseball", name_km: "Baseball", miles: 0.65, km: 1.05},
        {id: 7, name_miles: "Basketball", name_km: "Basketball", miles: 0.65, km: 1.05},
        {id: 8, name_miles: "Bicycling, easy (8.7mi/h)", name_km: "Bicycling, easy (14km/h)", miles: 1.4, km: 2.25},
        {id: 9, name_miles: "Bicycling, moderate (15mi/h)", name_km: "Bicycling, moderate (24km/h)", miles: 2.5, km: 4.02},
        {id: 10, name_miles: "Bicycling, vigorous (20mi/h)", name_km: "Bicycling, vigorous (32km/h)", miles: 3.3, km: 5.31},
        {id: 11, name_miles: "Bowling", name_km: "Bowling", miles: 0.36, km: 0.57},
        {id: 12, name_miles: "Boxing", name_km: "Boxing", miles: 1.11, km: 1.79},
        {id: 13, name_miles: "Calisthenics", name_km: "Calisthenics", miles: 0.53, km: 0.85},
        {id: 14, name_miles: "Canoeing", name_km: "Canoeing", miles: 0.46, km: 0.73},
        {id: 15, name_miles: "Cheerleading", name_km: "Cheerleading", miles: 0.5, km: 0.8},
        {id: 16, name_miles: "Circuit training (squats, lunges, pushups, burpees, situps etc)", name_km: "Circuit training (squats, lunges, pushups, burpees, situps etc)", miles: 1.0, km: 1.6},
        {id: 17, name_miles: "Climbing, indoor/outdoor", name_km: "Climbing, indoor/outdoor", miles: 1.35, km: 2.17},
        {id: 18, name_miles: "Croquet", name_km: "Croquet", miles: 0.38, km: 0.61},
        {id: 19, name_miles: "CrossFit", name_km: "CrossFit", miles: 1.25, km: 2.01},
        {id: 20, name_miles: "Dancing", name_km: "Dancing", miles: 0.55, km: 0.88},
        {id: 21, name_miles: "Elliptical trainer", name_km: "Elliptical trainer", miles: 1.02, km: 1.63},
        {id: 22, name_miles: "Fencing", name_km: "Fencing", miles: 0.91, km: 1.46},
        {id: 23, name_miles: "Fishing", name_km: "Fishing", miles: 0.46, km: 0.73},
        {id: 24, name_miles: "Football/soccer", name_km: "Football/soccer", miles: 1.0, km: 1.6},
        {id: 25, name_miles: "Gardening / yard work", name_km: "Gardening / yard work", miles: 0.4, km: 0.64},
        {id: 26, name_miles: "Golf (carrying clubs)", name_km: "Golf (carrying clubs)", miles: 0.55, km: 0.88},
        {id: 27, name_miles: "Grocery shopping", name_km: "Grocery shopping", miles: 0.34, km: 0.54},
        {id: 28, name_miles: "Gymnastics", name_km: "Gymnastics", miles: 0.61, km: 0.97},
        {id: 29, name_miles: "Handball", name_km: "Handball", miles: 1.74, km: 2.8},
        {id: 30, name_miles: "HIIT", name_km: "HIIT", miles: 1.25, km: 2.01},
        {id: 31, name_miles: "Hiking / orienteering", name_km: "Hiking / orienteering", miles: 1.16, km: 1.87},
        {id: 32, name_miles: "Hockey, field and ice", name_km: "Hockey, field and ice", miles: 1.2, km: 1.93},
        {id: 33, name_miles: "Horseback riding", name_km: "Horseback riding", miles: 0.45, km: 0.72},
        {id: 34, name_miles: "Housework", name_km: "Housework", miles: 0.36, km: 0.58},
        {id: 35, name_miles: "Ice skating", name_km: "Ice skating", miles: 0.42, km: 0.68},
        {id: 36, name_miles: "In-line skating/Rollerblading", name_km: "In-line skating/Rollerblading", miles: 0.95, km: 1.53},
        {id: 37, name_miles: "Jumping rope (skipping), fast", name_km: "Jumping rope (skipping), fast", miles: 1.5, km: 2.41},
        {id: 38, name_miles: "Jumping rope (skipping), moderate", name_km: "Jumping rope (skipping), moderate", miles: 1.25, km: 2.01},
        {id: 39, name_miles: "Kayaking", name_km: "Kayaking", miles: 0.76, km: 1.22},
        {id: 40, name_miles: "Kickboxing / MMA", name_km: "Kickboxing / MMA", miles: 1.45, km: 2.33},
        {id: 41, name_miles: "Lacrosse", name_km: "Lacrosse", miles: 1.21, km: 1.95},
        {id: 42, name_miles: "Martial Arts", name_km: "Martial Arts", miles: 1.18, km: 1.9},
        {id: 43, name_miles: "Mowing lawn", name_km: "Mowing lawn", miles: 0.6, km: 0.97},
        {id: 44, name_miles: "Pilates", name_km: "Pilates", miles: 0.46, km: 0.73},
        {id: 45, name_miles: "Punching bag", name_km: "Punching bag", miles: 0.9, km: 1.45},
        {id: 46, name_miles: "Raking lawn/leaves", name_km: "Raking lawn/leaves", miles: 0.61, km: 0.97},
        {id: 47, name_miles: "Racquetball", name_km: "Racquetball", miles: 0.91, km: 1.46},
        {id: 48, name_miles: "Rowing", name_km: "Rowing", miles: 0.74, km: 1.18},
        {id: 49, name_miles: "Rowing machine", name_km: "Rowing machine", miles: 1.06, km: 1.71},
        {id: 50, name_miles: "Rugby", name_km: "Rugby", miles: 1.52, km: 2.44},
        {id: 51, name_miles: "Running, 12min/mi", name_km: "Running, 7min/km", miles: 0.89, km: 1.43},
        {id: 52, name_miles: "Running, 10min/mi", name_km: "Running, 5.35min/km", miles: 1.11, km: 1.79},
        {id: 53, name_miles: "Running, 8min/mi", name_km: "Running, 4.28min/km", miles: 1.39, km: 2.24},
        {id: 54, name_miles: "Sailing, boat and board", name_km: "Sailing, boat and board", miles: 0.46, km: 0.73},
        {id: 55, name_miles: "Shoveling snow", name_km: "Shoveling snow", miles: 0.12, km: 1.17},
        {id: 56, name_miles: "Skateboarding", name_km: "Skateboarding", miles: 0.51, km: 0.82},
        {id: 57, name_miles: "Skiing, light/moderate", name_km: "Skiing, light/moderate", miles: 0.55, km: 0.88},
        {id: 58, name_miles: "Skiing, cross-country", name_km: "Skiing, cross-country", miles: 0.57, km: 0.92},
        {id: 59, name_miles: "Sledding", name_km: "Sledding", miles: 0.79, km: 1.27},
        {id: 60, name_miles: "Snowboarding/snowshoeing", name_km: "Snowboarding/snowshoeing", miles: 0.91, km: 1.46},
        {id: 61, name_miles: "Snowmobiling", name_km: "Snowmobiling", miles: 0.53, km: 0.85},
        {id: 62, name_miles: "Softball", name_km: "Softball", miles: 0.76, km: 1.22},
        {id: 63, name_miles: "Spinning", name_km: "Spinning", miles: 1.0, km: 1.61},
        {id: 64, name_miles: "Squash", name_km: "Squash", miles: 1.74, km: 2.80},
        {id: 65, name_miles: "Stair climbing, machine", name_km: "Stair climbing, machine", miles: 1.0, km: 1.61},
        {id: 66, name_miles: "Stair climbing, down stairs", name_km: "Stair climbing, down stairs", miles: 0.36, km: 0.57},
        {id: 67, name_miles: "Stair climbing, up stairs", name_km: "Stair climbing, up stairs", miles: 0.91, km: 1.46},
        {id: 68, name_miles: "Surfing", name_km: "Surfing", miles: 0.46, km: 0.73},
        {id: 69, name_miles: "Swimming, butterfly", name_km: "Swimming, butterfly", miles: 1.36, km: 2.19},
        {id: 70, name_miles: "Swimming, freestyle/breaststroke", name_km: "Swimming, freestyle/breaststroke", miles: 0.91, km: 1.46},
        {id: 71, name_miles: "Swimming, treading/leisure", name_km: "Swimming, treading/leisure", miles: 0.58, km: 0.93},
        {id: 72, name_miles: "Table tennis", name_km: "Table tennis", miles: 0.6, km: 0.97},
        {id: 73, name_miles: "Tae Bo", name_km: "Tae Bo", miles: 1.25, km: 2.01},
        {id: 74, name_miles: "Tai Chi", name_km: "Tai Chi", miles: 0.2, km: 0.32},
        {id: 75, name_miles: "Tennis", name_km: "Tennis", miles: 1.0, km: 1.61},
        {id: 76, name_miles: "Trampoline", name_km: "Trampoline", miles: 0.45, km: 0.72},
        {id: 77, name_miles: "Volleyball", name_km: "Volleyball", miles: 0.46, km: 0.73},
        {id: 78, name_miles: "Walking, stroll", name_km: "Walking, stroll", miles: 0.31, km: 0.49},
        {id: 79, name_miles: "Walking, average", name_km: "Walking, average", miles: 0.42, km: 0.68},
        {id: 80, name_miles: "Walking, power", name_km: "Walking, power", miles: 0.78, km: 1.26},
        {id: 81, name_miles: "Washing a car", name_km: "Washing a car", miles: 0.36, km: 0.57},
        {id: 82, name_miles: "Water aerobics", name_km: "Water aerobics", miles: 0.58, km: 0.93},
        {id: 83, name_miles: "Water polo", name_km: "Water polo", miles: 1.52, km: 2.44},
        {id: 84, name_miles: "Water skiing", name_km: "Water skiing", miles: 0.73, km: 1.17},
        {id: 85, name_miles: "Weight lifting, light", name_km: "Weight lifting, light", miles: 0.34, km: 0.54},
        {id: 86, name_miles: "Weight lifting, heavy", name_km: "Weight lifting, heavy", miles: 0.87, km: 1.40},
        {id: 87, name_miles: "Wrestling", name_km: "Wrestling", miles: 0.73, km: 1.17},
        {id: 88, name_miles: "Yoga", name_km: "Yoga", miles: 0.23, km: 0.36},
    ]

    let selectedUnit = units[0];
    let selectedActivity
    let durationInput;
    $: convertedValue = selectedActivity && duration ? Math.round(duration * selectedActivity[selectedUnit.unit] * 0.1 * 100) / 100 : 0;

    const copy = () => {
        const app = new CopyClipBoard({
            target: document.getElementById('clipboard'),
            props: {name: convertedValue},
        });
        app.$destroy();
    }


</script>

<main>
    <h1>The Conqueror</h1>
    <h2>Activity Converter</h2>
    <form class="content">
        <label>Unit</label>
        <Select items={units} bind:value={selectedUnit} isClearable={false}/>
        <label>Activity</label>
        <AutoComplete items="{conversions}" bind:selectedItem="{selectedActivity}"
                      labelFieldName={selectedUnit.unit_label} onBlur={() => durationInput.focus()} lock={true}/>
        <label>Duration (minutes)</label>
        <input type="text" bind:this={durationInput} bind:value={duration} min=0/>
        <label>Converted ({selectedUnit.unit})</label>
        <input type="text" readonly value={convertedValue}/>
    </form>
    <Button on:click={copy}>copy</Button>
    <div id="clipboard"></div>

    <footer>
        <span>The Conqueror official activity conversion chart <a
                href="https://help.theconqueror.events/en/articles/2027324-activity-conversion-chart">can be found here</a></span>
        <p>This site is not affiliated with The Conqueror</p>
    </footer>
</main>

<style>
    main {
        text-align: center;
        margin: 0 auto;

        min-height: 100%;
    }

    .content {
        margin: auto;
        padding: 10px;
        justify-content: center;
        width: 100%;
        display: grid;
        grid-template-columns: 40% 60%;
        grid-column-gap: 10px;
        grid-gap: 3px;
        max-width: none;
    }

    h1 {
        color: white;
        background-color: black;
        font-size: 3em;
        font-weight: 100;
        padding-top: 10px;
    }

    h2 {
        color: white;
        background-color: black;
        font-size: 2em;
        font-weight: 100;
        padding-bottom: 10px;
    }

    footer {
        opacity: 50%;
        text-align: center;
        padding: 3px;
        color: black;
        bottom: 0;
        position: fixed;
        width: 100%;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }

        .content {
            max-width: 50%;
        }
    }
</style>
