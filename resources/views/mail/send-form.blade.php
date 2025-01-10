<x-mail::message>
    <p>{{$name}} поделился добром</p>
    <p>Имя: {{ $name }}</p>
    <p>Телефон: {{ $phone }}</p>
    <p>Email: {{ $email }}</p>
    <p>Описание: {{ $description }}</p>

    {{ config('app.name') }}
</x-mail::message>
