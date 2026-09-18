<script lang="ts">
    import { getDayCode, getMonth, getMonthCode, getCentury, getCenturyCode, getYear, getYearCode, getDateCode, getDay, getLeapYearOffset } from "$lib/dates";


    let { date }: { date: Date } = $props();

</script>

<table>
    <thead>
        <tr>
            <th>Part</th>
            <th>Value</th>
            <th>Result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Day</td>
            <td>{getDay(date)}</td>
            <td>{getDayCode(date)}</td>
        </tr>
        <tr>
            <td>Month</td>
            <td>{getMonth(date)}</td>
            <td>{getMonthCode(date)}</td>
        </tr>
        <tr>
            <td>Leap Year Offset</td>
            <td></td>
            <td>{getLeapYearOffset(date)}</td>
        </tr>
        <tr>
            <td>Century</td>
            <td>{getCentury(date)}</td>
            <td>{getCenturyCode(date)}</td>
        </tr>
        <tr>
            <td>Year</td>
            <td>{getYear(date)}</td>
            <td>{getYearCode(date)}</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Summary</td>
            <td></td>
            <td>{getDateCode(date)}</td>
        </tr>
    </tfoot>
</table>
